#!/usr/bin/python3

import sys
import csv
import os.path

argv = sys.argv

if len(argv) < 2:
	sys.stderr.write('Usage : csv2html <csv_name> (<outputname>)\n')
	sys.exit()

csvname = argv[1]
if len(argv) >= 3:
	htmlname = argv[2]
else:
	htmlname = os.path.splitext(csvname)[0] + '.html'

csvfile = csv.reader(open(csvname,'r'))
htmlfile = open(htmlname,'w')

header = '''<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">

<script src="http://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</head>
'''
htmlfile.write(header)


htmlbody = '''
<body>
<table class="table table-striped table-hover">
<thead>
<tr>
<th>Problem</th>
</tr>
</thead>
<tbody>
'''
htmlfile.write(htmlbody)


for row in csvfile:
	if not row:
		continue
	problem,url = row
	htmlfile.write('<tr>\n\t<td><a href="{1}">{0}</a></td>\n</tr>\n'.format(problem,url))

htmlfooter = '''
</tbody>
</table>
</body>
</html>
'''
htmlfile.write(htmlfooter)
