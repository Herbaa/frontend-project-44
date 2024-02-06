install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	 npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
	
even:
	node bin/brain-even.js
calc:
	node bin/brain-calc.js
gcd:
	node bin/brain-gcd.js
prog:
	node bin/brain-progression.js