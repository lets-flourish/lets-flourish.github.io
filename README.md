# lets-flourish.github.io
Directory of independent businesses responding to the COVID-19 crisis

## installation

```
brew install ruby
# now add this to bashrc or similar
# export PATH="/usr/local/opt/ruby/bin:$PATH"

bundle update
```

## run the site locally
```
bundle exec jekyll serve
```

Then go to http://localhost:4000

## deploy

Master is deployed automatically.

## Update the business list

Simple as downloading the [gsheet](https://docs.google.com/spreadsheets/d/1h9oHxDO7xMZPTVPqePaUq0NsoaiqKmIJwCcUsiqMwvw/edit#gid=0) as a csv and overwriting `_data/businesses.csv`. Push it up and the site regenerates.
