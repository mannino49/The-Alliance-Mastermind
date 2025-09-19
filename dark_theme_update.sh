#!/bin/bash

echo "🎨 Updating The Alliance Dashboard to Dark Theme..."

# Update all dashboard components to use dark theme
find src/components -name "*Dashboard.js" -exec sed -i '' \
  -e 's/bg-white/bg-dark-800/g' \
  -e 's/bg-blue-900/text-primary-100/g' \
  -e 's/text-blue-900/text-primary-100/g' \
  -e 's/text-blue-800/text-primary-300/g' \
  -e 's/text-gray-700/text-gray-300/g' \
  -e 's/text-gray-600/text-gray-400/g' \
  -e 's/text-gray-500/text-gray-400/g' \
  -e 's/bg-blue-500/bg-primary-500/g' \
  -e 's/bg-blue-600/bg-primary-600/g' \
  -e 's/bg-blue-700/bg-primary-700/g' \
  -e 's/bg-blue-800/bg-primary-800/g' \
  -e 's/bg-blue-50/bg-dark-700/g' \
  -e 's/bg-green-50/bg-dark-700/g' \
  -e 's/bg-yellow-50/bg-dark-700/g' \
  -e 's/bg-red-50/bg-dark-700/g' \
  -e 's/border-green-200/border-green-500\/20/g' \
  -e 's/border-blue-200/border-primary-500\/20/g' \
  -e 's/border-yellow-200/border-yellow-500\/20/g' \
  -e 's/border-red-200/border-red-500\/20/g' \
  -e 's/rounded-lg/rounded-xl/g' \
  -e 's/shadow-md/shadow-xl/g' \
  -e 's/border-dark-600/border-dark-700/g' \
  -e 's/border-dark-700/border-dark-700/g' \
  {} \;

echo "✅ Dark theme updates applied to all dashboard components!"
echo "🔄 Restart your development server to see the changes."
