Non-JS version - pick your favorite language.

## Tasks

### Task 1: ...Ready for it?

Using your language of choice, fetch https://en.wikipedia.org/wiki/Taylor_Swift (or a Wikipedia page of your choice) to a local file.

```











```

---

### Task 2: Dear Reader

Strip out all HTML tags, leaving just the contents of the tags as a text file. Remove `style` and `script` tags completely. You can use an XML/HTML parser, or build your own.

**> Discussion**:  What pre-processing might you want to do if you were to send this output to an LLM for summarization?

```











```

---

### Task 3: Death By A Thousand Cuts

Time to scale up! Look for links to other `/wiki` pages, and fetch the first `5` links per page, then the links from those pages, up to two levels deep. 

**> Question**: If limitPerPage = 5 and maxDepth = 2, how many pages will we fetch in total?

```











```

---

### Task 4: invisible string

It's time to count! 

Load all the text files in `output` and build a dictionary of the top words across Taylorpedia. 

Find the top 10 words longer than 3 letters and their frequencies. Remember to remove punctuation and ignore casing!

**> Question**: Is there anything unusual about your top 10 results? Identify the cause and improve the output.

```











```

---

### Task 5

Take a step back and let's chat. If we wanted to analyze all of Wikipedia (6 million articles in English, with 4.5 billion words and 22 GB of data), how would we do it?

**Questions**:
- What challenges might arise in fetching this data?
- How would you organize and store this dataset?
- How would you build a word frequency map for each page?
- With only that data, how would you find the most relevant page for a given search term?

```











```

## ... How Did It End? 

Let us know how you liked our little exercise!