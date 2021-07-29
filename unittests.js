QUnit.test("Amount 1000, months 12, expect 1200", function (assert) {
    assert.ok(calculate(1000, 12) == "1200", "Passed!");
});
QUnit.test("invalid input, months 12, expect alert", function (assert) {
    assert.ok(calculate("abcd", 12) == "You need to input integers in both fields.", "Passed!");
});
