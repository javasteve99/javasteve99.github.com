desc 'Start Jekyll server and watch Sass/Bourbon files'
task :server do
  puts "Starting the Jekyll server and watching Sass files."
  jekyllPid = Process.spawn('jekyll serve --watch')
  sassPid = Process.spawn('sass --watch css/sass:css')

  trap("INT") {
    [jekyllPid, sassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, sassPid].each { |pid| Process.wait(pid) }
end
