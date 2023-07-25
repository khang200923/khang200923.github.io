moreDef = `The word "more" is a common English word that has a variety of meanings and uses. It can be used as an adjective, adverb, noun, or pronoun. As an adjective, it is used to describe a greater amount, quantity, or degree of something. For example, "I need more time to finish my work." As an adverb, it is used to indicate an increase in degree or intensity. For example, "She spoke more softly." As a noun, it refers to a greater amount or additional quantity of something. For example, "I want more of that delicious cake." As a pronoun, it refers to a greater amount or additional quantity of something without specifying what that something is. For example, "I need more." Overall, "more" is a versatile word that is used extensively in English language to convey a wide range of meanings and ideas.`
function giveMoreDef() {
    const res = document.createElement('span');
    yep = document.getElementById('holy-hell');
    yep.parentNode.replaceChild(res, yep);
    res.innerHTML = moreDef;
}
