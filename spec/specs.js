describe("StyleStripper", function() {
  it("Verifies that Spec-runner is set up correctly", function() {
    expect(true).to.eql(true);
  });

  it("Will not remove text without a style", function() {
    expect(removeStyles("dog")).to.eql("dog");
  })

  it("Will remove the beginning of an inline style", function() {
    expect(removeStyles("<p style=\"\"></p>")).to.eql("<p \"></p>");
  });
});
