.PHONY: dist clean gen test

PROVIDER = "false"

all: dist

dist:
	npx tsc

clean:
	rm -rf @jaxxstorm
