.PHONY: dist clean gen test

PROVIDER = "false"

all: dist

dist:
	npx tsc
	cp README.md LICENSE package.json dist

clean:
	rm -rf @jaxxstorm
