# Lessons Learned

* Transforming a buffer with UTF-8 encoding is not the same as using the
`toString()` method:
  * When you transform a buffer to a string with UTF-8 encoding, you explicitly specify the encoding that should be used to interpret the bytes in the buffer as characters. This is important because different encodings can represent characters differently. For example, UTF-8 is a variable-width encoding, which means that some characters may be represented using multiple bytes. By specifying UTF-8 encoding, you ensure that the buffer is interpreted correctly.
  * The toString() method on a buffer is a general method for converting a buffer into a string. By default, it assumes that the buffer contains binary data and interprets it as a binary string. It doesn't consider any specific character encoding. If the buffer contains text data with a character encoding other than binary, using toString() without specifying the encoding can lead to incorrect results.
* Didn't know txt files have both `\r` (carriage return) and `\n` (line feed).

# Helpful Links
* https://www.30secondsofcode.org/js/s/read-file-lines/
* https://stackoverflow.com/questions/12747722/what-is-the-difference-between-a-line-feed-and-a-carriage-return
* https://stackoverflow.com/questions/10031112/why-does-javascript-only-count-carriage-returns-as-one-character-when-it-is-two
* https://stackoverflow.com/questions/8232776/javascript-split-string-to-array-of-int
* https://stackoverflow.com/questions/8125709/how-to-split-newline#:~:text=The%20simplest%20and%20safest%20way,split(%2F%5Cn%2F)%3B