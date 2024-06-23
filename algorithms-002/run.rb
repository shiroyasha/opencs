content = File.read(ARGV[0])

preamble = <<~RUBY
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const PRIVATE_R1 = readline.createInterface({ input, output });
RUBY

code = preamble + "\n" + content.gsub(/prompt\(/, 'await PRIVATE_R1.question(').gsub(/function /, 'async function ').gsub(/^ponavljanje/, "await ponavljanje")

File.write("/tmp/1.js", code)

system("node /tmp/1.js")
