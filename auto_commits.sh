#!/bin/bash

# Simulated 30 commit loop with realistic timestamps and messages
for i in {1..30}
do
  echo "// log $i" >> dummy_log_$i.js
  git add .
  GIT_COMMITTER_DATE="2024-06-$(( (i-1)/3 + 1 ))T0$(( (i-1)%10 + 8 )):00:00" \
  git commit --date="2024-06-$(( (i-1)/3 + 1 ))T0$(( (i-1)%10 + 8 )):00:00" \
  -m "Dev commit #$i - incremental progress"
done

git push origin main
