-- Save this file as "startup" in a computercraft computer
-- You'll probably want a chunkloader next to the computer
while true do
  f = fs.open('ingametime.out','w')
  f.write(os.time())
  f.close()

  print(os.time())
  sleep(5)
end