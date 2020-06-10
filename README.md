# My Title Normalizer

My Title Normalizer is a minimalistic CLI application that helps
me to normalize the titles of the files on my local laptop.

## How to install

1. Clone ths repo `git clone git@github.com:apetrovYa/my-title-normalizer.git`;
2. From the repository folder, execute the following command to install via npm:
   `npm install -g`;
3. At this stage, just invoke the CLI: `my-title-normalizer "Hello World"`.

## How it works

The script expects a string in input. The output will be possibly
a string like the following: aaaaa-bbbbb-ccccc-dddd.
Where {a,b,c,d} are arbitrary sequences of chars.
In between the script transforms an input into output.

## Why this tool

The main motivation: explore minimalistically Javascript.