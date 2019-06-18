# 完全流用KL

```bash
./cloc.sh | jq '.SUM.same | [.code, .blank, .comment]'
./cloc.sh | jq '.SUM.same | [.code, .blank, .comment] | add'
```

# 変更KL(削除含む)

```bash
cat cloc_diff.json | jq '.SUM | [.modified, .removed] | .[] | .code, .comment, .blank ' | awk '{s+=$1} END {print s}'
```

# 追加・変更・削除のうち、コメントと空行

```bash
cat cloc_diff.json | jq '.SUM | [.added, .modified, .removed] | .[] | .comment, .blank' | awk '{s+=$1} END {print s}'
```


