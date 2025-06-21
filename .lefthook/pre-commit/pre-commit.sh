STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(js|jsx|ts|tsx)$' | tr '\n' ' ')

if [ ! -z "$STAGED_FILES" ]; then
  echo "Running lint on staged files..."
  npm run lint -- --fix $STAGED_FILES

  git add $STAGED_FILES
fi

echo "Setting up environment for typecheck..."
cp .env.example .env.temp

set -a
source .env.temp
set +a

echo "Running typecheck..."
npm run typecheck

rm .env.temp
