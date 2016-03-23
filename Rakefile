desc "Run SASS watch and start Jekyll server."
task :dev do
  puts "Watching SASS files for changes and running Jekyll server on port 4000."
  pids = [
    spawn('sass --watch assets/src/scss:assets/build/css'),
    spawn('jekyll serve'),
  ]
  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end
  loop do
    sleep 1
  end
end