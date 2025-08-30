#!/bin/bash

echo "🤖 Integrating ClientChatbot into all dashboard components..."

# List of dashboard components that need chatbot integration
DASHBOARDS=(
    "BruceBowserDashboard.js"
    "SandraDashboard.js"
    "AnatoliyDashboard.js"
    "GeofDashboard.js"
    "JamesDashboard.js"
    "JasonDashboard.js"
    "MichaelDashboard.js"
    "RobDashboard.js"
    "BlairDashboard.js"
    "RickSessinghausDashboard.js"
    "StephanieDashboard.js"
    "BrianDashboard.js"
)

# Client ID mapping based on the integration guide
declare -A CLIENT_IDS
CLIENT_IDS["BruceBowserDashboard.js"]="brucebowser"
CLIENT_IDS["SandraDashboard.js"]="sandraozols"
CLIENT_IDS["AnatoliyDashboard.js"]="anatoliyotchkovskiy"
CLIENT_IDS["GeofDashboard.js"]="geoffreygarth"
CLIENT_IDS["JamesDashboard.js"]="jamescrowe"
CLIENT_IDS["JasonDashboard.js"]="jasontadros"
CLIENT_IDS["MichaelDashboard.js"]="michaelwhitaker"
CLIENT_IDS["RobDashboard.js"]="rob finlay"
CLIENT_IDS["BlairDashboard.js"]="blairlukan"
CLIENT_IDS["RickSessinghausDashboard.js"]="ricksessinghaus"
CLIENT_IDS["StephanieDashboard.js"]="stephanievandeynze"
CLIENT_IDS["BrianDashboard.js"]="briancamastral"

COMPONENTS_DIR="src/components"
BACKUP_DIR="src/components/backups"

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo "📁 Working directory: $COMPONENTS_DIR"
echo "💾 Backups will be saved to: $BACKUP_DIR"

for dashboard in "${DASHBOARDS[@]}"; do
    file_path="$COMPONENTS_DIR/$dashboard"
    
    if [ -f "$file_path" ]; then
        echo ""
        echo "🔧 Processing: $dashboard"
        
        # Create backup
        backup_path="$BACKUP_DIR/${dashboard}.backup.$(date +%Y%m%d_%H%M%S)"
        cp "$file_path" "$backup_path"
        echo "   💾 Backup created: ${backup_path##*/}"
        
        # Get client ID
        client_id="${CLIENT_IDS[$dashboard]}"
        echo "   🆔 Client ID: $client_id"
        
        # Check if chatbot is already integrated
        if grep -q "ClientChatbot" "$file_path"; then
            echo "   ✅ Chatbot already integrated, skipping..."
            continue
        fi
        
        # Add import statement after the first import
        sed -i '' '1a\
import ClientChatbot from '\''./ClientChatbot'\'';
' "$file_path"
        echo "   📥 Import statement added"
        
        # Find the closing div of the main container and add chatbot before it
        # Look for the last closing div that's likely the main container
        last_line=$(wc -l < "$file_path")
        
        # Find the last closing div that's not nested
        for ((i=last_line; i>0; i--)); do
            line_content=$(sed -n "${i}p" "$file_path")
            if [[ "$line_content" =~ ^[[:space:]]*</div>[[:space:]]*$ ]]; then
                # Check if this is the main container by looking at indentation
                indent=$(echo "$line_content" | sed 's/^\([[:space:]]*\).*/\1/' | wc -c)
                if [ $indent -le 3 ]; then
                    # This is likely the main container, add chatbot before it
                    sed -i '' "${i}i\\
      {/* AI Chatbot */}\\
      <ClientChatbot \\
        currentClientId=\"$client_id\" \\
        allClientData={allClientData} \\
      />\\
" "$file_path"
                    echo "   🤖 Chatbot component added"
                    break
                fi
            fi
        done
        
        echo "   ✅ Integration complete for $dashboard"
        
    else
        echo "❌ File not found: $dashboard"
    fi
done

echo ""
echo "🎉 Chatbot integration script completed!"
echo ""
echo "📋 Next steps:"
echo "1. Check that all dashboards now have the chatbot"
echo "2. Test the chatbot in different dashboards"
echo "3. Verify that each client sees their own data"
echo ""
echo "🔍 To test, navigate to any dashboard and look for the 'Show AI Assistant' button"
echo "💬 Ask questions like: 'How am I performing?' or 'What are my areas for growth?'"
