module.exports = grammar({
  name: 'PaketReferences',

  rules: {
    source_file: $ => repeat($._reference_statement),
    _reference_statement: $ => choice($.reference_group,$._reference_definition),
    reference_group: $ => prec.right(seq('group',
				       $.group_name, repeat1($._reference_definition))),
    group_name: $ => /[a-zA-Z0-9_\-\.]+/,
    definition_name:$ =>  /[a-zA-Z0-9_\-\.]+/,
    _reference_definition: $ => $.definition_name
  }
});
