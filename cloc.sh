#!/bin/bash
base_commit=eb8d685f8b2a65fad8df556549c538dd7be56d6c
./cloc.latest --json --diff $base_commit HEAD

