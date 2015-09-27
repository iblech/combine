initSidebarItems({"fn":[["alpha_num","Parses either an alphabet letter or digit"],["any","Parses any token"],["between","Parses `open` followed by `parser` followed by `close` Returns the value of `parser`"],["chainl1","Parses `p` 1 or more times separated by `op` The value returned is the one produced by the left associative application of `op`"],["chainr1","Parses `p` one or more times separated by `op` The value returned is the one produced by the right associative application of `op`"],["char","Parses a character and succeeds if the characther is equal to `c`"],["choice","Takes an array of parsers and tries them each in turn. Fails if all parsers fails or when a parsers fails with a consumed state."],["crlf","Parses carriage return and newline, returning the newline character."],["digit","Parses a digit from a stream containing characters"],["from_iter","Converts an `Iterator` into a stream."],["hex_digit","Parses a hexdecimal digit with uppercase and lowercase"],["letter","Parses an alphabet letter"],["lower","Parses an lowercase letter"],["many","Parses `p` zero or more times returning a collection with the values from `p`. If the returned collection cannot be inferred type annotations must be supplied, either by annotating the resulting type binding `let collection: Vec<_> = ...` or by specializing when calling many, `many::<Vec<_>, _>(...)`"],["many1","Parses `p` one or more times returning a collection with the values from `p`. If the returned collection cannot be inferred type annotations must be supplied, either by annotating the resulting type binding `let collection: Vec<_> = ...` or by specializing when calling many1 `many1::<Vec<_>, _>(...)`"],["newline","Parses a newline character"],["not_followed_by","Succeeds only if `parser` fails. Never consumes any input."],["oct_digit","Parses an octal digit"],["optional","Returns `Some(value)` and `None` on parse failure (always succeeds)"],["parser","Wraps a function, turning it into a parser Mainly needed to turn closures into parsers as function types can be casted to function pointers to make them usable as a parser"],["satisfy","Parses a token and succeeds depending on the result of `predicate`"],["sep_by","Parses `parser` zero or more time separated by `separator`, returning a collection with the values from `p`. If the returned collection cannot be inferred type annotations must be supplied, either by annotating the resulting type binding `let collection: Vec<_> = ...` or by specializing when calling sep_by, `sep_by::<Vec<_>, _, _>(...)`"],["sep_by1","Parses `parser` one or more time separated by `separator`, returning a collection with the values from `p`. If the returned collection cannot be inferred type annotations must be supplied, either by annotating the resulting type binding `let collection: Vec<_> = ...` or by specializing when calling sep_by, `sep_by1::<Vec<_>, _, _>(...)`"],["sep_end_by","Parses `parser` zero or more time separated by `separator`, returning a collection with the values from `p`. If the returned collection cannot be inferred type annotations must be supplied, either by annotating the resulting type binding `let collection: Vec<_> = ...` or by specializing when calling sep_by, `sep_by::<Vec<_>, _, _>(...)`"],["sep_end_by1","Parses `parser` one or more time separated by `separator`, returning a collection with the values from `p`. If the returned collection cannot be inferred type annotations must be supplied, either by annotating the resulting type binding `let collection: Vec<_> = ...` or by specializing when calling sep_by, `sep_by1::<Vec<_>, _, _>(...)`"],["skip_many","Parses `p` zero or more times ignoring the result"],["skip_many1","Parses `p` one or more times ignoring the result"],["space","Parses whitespace"],["spaces","Skips over zero or more spaces"],["string","Parses the string `s`"],["tab","Parses a tab character"],["token","Parses a character and succeeds if the characther is equal to `c`"],["try","Try acts as `p` except it acts as if the parser hadn't consumed any input if `p` returns an error after consuming input"],["unexpected","Always fails with `message` as an unexpected error. Never consumes any input."],["upper","Parses an uppercase letter"],["value","Always returns the value `v` without consuming any input."]],"mod":[["char","Module containg parsers specialized on character streams"],["combinator","Module containing all specific parsers"],["primitives","Module containing the primitive types which is used to create and compose more advanced parsers"]],"struct":[["ParseError","Struct which hold information about an error that occured at a specific position. Can hold multiple instances of `Error` if more that one error occured in the same position."],["State","The `State<I>` struct keeps track of the current position in the stream `I`"]],"trait":[["Parser","By implementing the `Parser` trait a type says that it can be used to parse an input stream into the type `Output`."],["ParserExt","Extension trait which provides functions that are more conveniently used through method calls"]],"type":[["ParseResult","A type alias over the specific `Result` type used by parsers to indicate wether they were successful or not. `O` is the type that is output on success `I` is the specific stream type used in the parser"]]});