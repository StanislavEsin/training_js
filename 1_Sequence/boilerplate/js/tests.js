const LOOPS = 100;

QUnit.test("Без аргументов", function(assert) {
    const START = 0;
    const generator = sequence();

    for (let i = START; i < START + LOOPS; i++) {
        assert.equal(generator(), i, "Next number: " + i)
    }
});

QUnit.test("С начальным числом 346", function(assert) {
    let START = 346;
    const generator = sequence(START);

    for (let i = START; i < START + LOOPS; i++) {
        assert.equal(generator(), i, "Next number: " + i);
    }
});

QUnit.test("С начальным числом 100 и шагом 5", function(assert) {
    let START = 100;
    const generator = sequence(START, 5);

    for (let i = START; i < START + (LOOPS * 5); i += 5) {
        assert.equal(generator(), i, "Next number: " + i);
    }
});

QUnit.test("Exceptions", function( assert ) {
    assert.throws(
        function() {
            sequence('test')
        },
        function(err) {
            return err.toString() === "TypeError: invalid start";
        },
        "TypeError: invalid start"
    );

    assert.throws(
        function() {
            sequence(0, 'test')
        },
        function(err) {
            return err.toString() === "TypeError: invalid step";
        },
        "TypeError: invalid step"
    );
});