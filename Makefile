build:
	rm -f ufd-raid-extension.zip
	pnpm build && (cd dist && zip -r ../ufd-raid-extension.zip ./*)