const cards = [
    {
        name: 'Queen of Pentacles',
        image: require('./assets/tarotCards/pentaclesQueen.png'),
        meaning: "The face suggests that of a dark woman, whose qualities might be summed up in the idea of greatness of soul. She has also the serious cast of intelligence - she contemplates her symbol and may see worlds therein. Divinatory meanings: Opulence, generosity, security, magnificence, liberty."
    },
    {
        name: 'King of Pentacles',
        image: require('./assets/tarotCards/pentaclesKing.png'),
        meaning: "The figure calls for no special description. The face is rather dark, suggesting also courage, but somewhat lethargic in tendency. The bull's head should be noted as a recurrent symbol on his throne. The sign of this suit is represented throughout as engraved or blazoned with the pentagram, typifying the correspondence of the four elements in human nature and that by which they may be governed. Divinatory meanings: Valor, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind - success in these paths."
    },
    {
        name: 'Knight of Pentacles',
        image: require('./assets/tarotCards/pentaclesKnight.png'),
        meaning: "He rides a slow, enduring, heavy horse, to which his own aspect corresponds. Divinatory meanings: Utility, serviceableness, interest, rectitude, responsibility."
    },
    {
        name: 'Page of Pentacles',
        image: require('./assets/tarotCards/pentaclesPage.png'),
        meaning: "A youthful figure, looking intently at the pentacle that hovers over his raised hands. Divinatory meanings: Application, study scholarship, reflection. Another reading says news, messages and the bringer of rule, management."
    },
    {
        name: '10 of Pentacles',
        image: require('./assets/tarotCards/pentacles10.png'),
        meaning: "Gain, riches, family matters, archives, extraction, the abode of a family."
    },
    {
        name: '9 of Pentacles',
        image: require('./assets/tarotCards/pentacles9.png'),
        meaning: "Prudence, safety, success, accomplishment, certitude, discernment."
    },
    {
        name: '8 of Pentacles',
        image: require('./assets/tarotCards/pentacles8.png'),
        meaning: "Work, employment, commission, craftsmanship, skill in craft and business."
    },
    {
        name: '7 of Pentacles',
        image: require('./assets/tarotCards/pentacles7.png'),
        meaning: "These are exceedingly contradictory, in the main, it is a card of money, business, barter - but one reading gives altercation, quarrel, and another innocence, ingenuity, purgation."
    },
    {
        name: '6 of Pentacles',
        image: require('./assets/tarotCards/pentacles6.png'),
        meaning: "Presents, gifts, gratification. Another account says attention, vigilance, now is the accepted time, present prosperity, etc."
    },
    {
        name: '5 of Pentacles',
        image: require('./assets/tarotCards/pentacles5.png'),
        meaning: "It foretells material trouble above all, whether in the form illustrated, that is, destitution, or otherwise. For some cartomancists, it is a card of love and lovers - wife, husband, friend, mistress - also concordance, affinities. These alternatives cannot be harmonized."
    },
    {
        name: '4 of Pentacles',
        image: require('./assets/tarotCards/pentacles4.png'),
        meaning: "The surety of possessions, cleaving to that which one has, gifts, legacy, inheritance."
    },
    {
        name: '3 of Pentacles',
        image: require('./assets/tarotCards/pentacles3.png'),
        meaning: "Metier, trade, skilled labor. Usually, however, regarded as a card of nobility, aristocracy, renown, glory."
    },
    {
        name: '2 of Pentacles',
        image: require('./assets/tarotCards/pentacles2.png'),
        meaning: "It is represented as a card of gaiety, recreation and its connections, which is the subject of the design. But it is read also as news and messages in writing, such as obstacles, agitation, trouble, embroilment."
    },
    {
        name: 'Ace of Pentacles',
        image: require('./assets/tarotCards/pentaclesAce.png'),
        meaning: "Perfect contentment, felicity, ecstasy - also speedy intelligence, gold."
    },
    {
        name: 'King of Swords',
        image: require('./assets/tarotCards/swordsKing.png'),
        meaning: "He sits in judgement, holding the unsheathed sign of his suit. Divinatory meanings: Whatsoever arises out of the idea of judgement and all its connections - power, command, authority, militant intelligence, law, offices of the crown, and so forth."
    },
    {
        name: 'Queen of Swords',
        image: require('./assets/tarotCards/swordsQueen.png'),
        meaning: "Her right hand raises the weapon vertically and the hilt rests on an arm of her royal chair. The left hand is extended, the arm raised, her coutenance severe, chastened and suggests familiarity with sorrow. Divinatory meanings: Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation."
    },
    {
        name: 'Knight of Swords',
        image: require('./assets/tarotCards/swordsKnight.png'),
        meaning: "In full course, as if scattering his enemies. Divinatory meanings: Skill, bravery, capacity, defense, address, enmity, wrath, war, destruction, opposition, resistance, ruin."
    },
    {
        name: 'Page of Swords',
        image: require('./assets/tarotCards/swordsPage.png'),
        meaning: "A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. Divinatory meanings: Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging."
    },
    {
        name: '10 of Swords',
        image: require('./assets/tarotCards/swords10.png'),
        meaning: "Whatsoever is intimated by the design - also pain, affliction, tears, sadness, desolation."
    },
    {
        name: '9 of Swords',
        image: require('./assets/tarotCards/swords9.png'),
        meaning: "Death, failure, miscarriage, delay, deception, disappointment, despair."
    },
    {
        name: '8 of Swords',
        image: require('./assets/tarotCards/swords8.png'),
        meaning: "Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calamity - also sickness."
    },
    {
        name: '7 of Swords',
        image: require('./assets/tarotCards/swords7.png'),
        meaning: "Design, attempt, wish, hope, confidence - also quarrelling. A plan that may fail, annoyance."
    },
    {
        name: '6 of Swords',
        image: require('./assets/tarotCards/swords6.png'),
        meaning: "Journey by water, route, way, envoy, expedient."
    },
    {
        name: '5 of Swords',
        image: require('./assets/tarotCards/swords5.png'),
        meaning: "Degradation, destruction, reversal, infamy, dishonor, loss."
    },
    {
        name: '4 of Swords',
        image: require('./assets/tarotCards/swords4.png'),
        meaning: "Vigilance, retreat, solitude, hermit's repose, exile, tomb and coffin."
    },
    {
        name: '3 of Swords',
        image: require('./assets/tarotCards/swords3.png'),
        meaning: "Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally."
    },
    {
        name: '2 of Swords',
        image: require('./assets/tarotCards/swords2.png'),
        meaning: "Conformity and the equipoise which it suggests, courage, friendship, affection, concord in a state of arms, intimacy."
    },
    {
        name: 'Ace of Swords',
        image: require('./assets/tarotCards/swordsAce.png'),
        meaning: "Triumph, the excessive degree in everything, conquest, triumph of force. A card of great force, in love as well as in hatred."
    },
    {
        name: 'King of Cups',
        image: require('./assets/tarotCards/cupsKing.png'),
        meaning: "He holds a short scepter in his left hand and a great cup in his right, his throne is set upon the sea, on one side a ship is riding and on the other a dolphin is leaping. The implicit is that the sign of the Cup naturally refers to water, which appears in all the court cards. Divinatory meanings: Fair man, man of business, law, or divinity, responsible, disposed to oblige the Querent. Also equity, art and science, including those who profess science, law and art, creative intelligence."
    },
    {
        name: 'Queen of Cups',
        image: require('./assets/tarotCards/cupsQueen.png'),
        meaning: "Beautiful, fair, dreamy woman (as one who sees visions in a cup). Divinatory meanings: Good, fair woman, honest, devoted, who will do service to the Querent. Loving intelligence, and hence the gift of vision, success, happiness, pleasure, also wisdom, virtue."
    },
    {
        name: 'Knight of Cups',
        image: require('./assets/tarotCards/cupsKnight.png'),
        meaning: "Graceful, not warlike, riding quietly, wearing a winged helmet, referring to the higher graces of the imagination which sometimes characterize this card. Divinatory meanings: Arrival, approach - sometimes that of a messenger, advances, proposition, demeanor, invitation, incitement."
    },
    {
        name: 'Page of Cups',
        image: require('./assets/tarotCards/cupsPage.png'),
        meaning: "A fair, pleasing, somewhat effeminate Page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. Divinatory meanings: Fair young man, one impelled to render service and with whom the Querent will be connected, a studious youth, news, message, application, reflection, meditation - also these things directed to business."
    },
    {
        name: '10 of Cups',
        image: require('./assets/tarotCards/cups10.png'),
        meaning: "Contentment, repose of the entire heart - the perfection of that state, if with several picture cards, a person who is taking charge of the Querent's interests. Also the town, village or country inhabited by the Querent."
    },
    {
        name: '9 of Cups',
        image: require('./assets/tarotCards/cups9.png'),
        meaning: "Concord, contentment, physical well being; also victory, success, advantage, satisfaction for the Querent or person for whom the consultation is made."
    },
    {
        name: '8 of Cups',
        image: require('./assets/tarotCards/cups8.png'),
        meaning: "The card speaks for itself on the surface, but other readings are entirely antithetical - giving joy, mildness, timidity, honor, modesty."
    },
    {
        name: '7 of Cups',
        image: require('./assets/tarotCards/cups7.png'),
        meaning: "Fairy favors, images of reflection, imagination, sentiment, things seen in the glass of contemplation, some attainment in these degrees but nothing permanent or substantial is suggested."
    },
    {
        name: '6 of Cups',
        image: require('./assets/tarotCards/cups6.png'),
        meaning: "A card of memories and of the past. For example, reflecting on childhood, happiness, enjoyment, but coming rather from the past, things that have vanished. Another reading reverses this, suggesting new relations, new environment and new knowledge."
    },
    {
        name: '5 of Cups',
        image: require('./assets/tarotCards/cups5.png'),
        meaning: "It is a card of loss, but something remains; three have been taken, but two are left. It is a card of inheritance, transmission and patrimony. It may be a card of marriage, but not without bitterness or frustration."
    },
    {
        name: '4 of Cups',
        image: require('./assets/tarotCards/cups4.png'),
        meaning: "Weariness, disgust, aversion, imaginary vexations - as if the wine of this world had caused satiety only. Another cup of wine, as if a fairy gift is now offered him, but he sees no consolation therein. This is also a card of blended pleasure."
    },
    {
        name: '3 of Cups',
        image: require('./assets/tarotCards/cups3.png'),
        meaning: "The conclusion of any matter. Plenty, perfection, merriment, happiness, victory, fulfillment, solace, healing."
    },
    {
        name: '2 of Cups',
        image: require('./assets/tarotCards/cups2.png'),
        meaning: "Love, passion, friendship, affinity, union, concord, sexual relations. That which nature has sanctified."
    },
    {
        name: 'Ace of Cups',
        image: require('./assets/tarotCards/cupsAce.png'),
        meaning: "True heart, joy, contentment, abode, nourishment, abundance, fertility, holy table, felicity."
    },
    {
        name: 'King of Wands',
        image: require('./assets/tarotCards/wandsKing.png'),
        meaning: 'The physical and emotional nature to which this card is attributed is dark, ardent, lithe, animated, impassioned, noble. He uplifts a flowering wand and wears, like his three correspondences in the remaining suits, what is called a cap of maintenance beneath his crown. He connects with the symbol of the lion, which is emblazoned on the back of his throne. Divinatory meanings: Dark man, friendly, countryman, generally married, honest and conscientious.'
    },
    {
        name: 'Queen of Wands',
        image: require('./assets/tarotCards/wandsQueen.png'),
        meaning: "Throughout this suit, the wands are always in leaf, as it is a suit of life and animation. Emotionally and otherwise, the Queen's personality corresponds to that of the King, but is more magnetic. Divinatory meanings: A dark woman or a countrywoman, friendly, chaste, loving, honorable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money."
    },
    {
        name: 'Knight of Wands',
        image: require('./assets/tarotCards/wandsKnight.png'),
        meaning: "He is shown as if upon a journey, armed with a short wand, and although mailed is not on a warlike errand. He is passing mounds or pyramids. Divinatory meanings: Departure, absence, flight, emigration. A dark young man, friendly. Change of residence."
    },
    {
        name: 'Page of Wands',
        image: require('./assets/tarotCards/wandsPage.png'),
        meaning: "A young man stands in the act of proclamation. He is unknown but faithful and his tidings are strange. Divinatory meanings: Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favorable testimony concerning him. He is a dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit."
    },
    {
        name: '10 of Wands',
        image: require('./assets/tarotCards/wands10.png'),
        meaning: "A card of many significances, and some of the readings cannot be harmoni"
    },
    {
        name: '9 of Wands',
        image: require('./assets/tarotCards/wands9.png'),
        meaning: "The card signifies strength in opposition. If attacked, he will meet the onslaught boldly. With this main significance there are all its possible adjuncts, including delay, suspension, adjournment."
    },
    {
        name: '8 of Wands',
        image: require('./assets/tarotCards/wands8.png'),
        meaning: "Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured, felicity; that which is on the move, also the arrows of love."
    },
    {
        name: '7 of Wands',
        image: require('./assets/tarotCards/wands7.png'),
        meaning: "It is a card of valor, for on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife, in business - negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him."
    },
    {
        name: '6 of Wands',
        image: require('./assets/tarotCards/wands6.png'),
        meaning: "The card has been so designed that it can cover several significations. On the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King's courier. It is expectation crowned with its own desire, the crown of hope."
    },
    {
        name: '5 of Wands',
        image: require('./assets/tarotCards/wands5.png'),
        meaning: "Imitation, for example, sham fight, the strenuous competition and struggle of the search after riches and fortune. Hence some attributions say that it is a card of gold, gain, opulence."
    },
    {
        name: '4 of Wands',
        image: require('./assets/tarotCards/wands4.png'),
        meaning: "They are for once almost on the surface - country life, repose, concord, harmony, prosperity, peace, and the perfected work of these."
    },
    {
        name: '3 of Wands',
        image: require('./assets/tarotCards/wands3.png'),
        meaning: "He symbolizes established strength, enterprise, effort, trade, discovery, commerce; those are his ships, bearing his merchandise, which are sailing over the sea."
    },
    {
        name: '2 of Wands',
        image: require('./assets/tarotCards/wands2.png'),
        meaning: "Between the alternative readings there is no marriage possible, on the one hand, riches, fortune, magnificence. And on the ogher, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion - here is a lord overlooking his dominion and alternately contemplating a glove. It looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world's wealth."
    },
    {
        name: 'Ace of Wands',
        image: require('./assets/tarotCards/wandsAce.png'),
        meaning: "Creation, invention, enterprise, the powers which result in these, principle, beginning, source, birth, family, origin, the beginning of enterprises, according to another account - money, fortune, inheritance."
    },
    {
        name: 'The World',
        image: require('./assets/tarotCards/theWorld.png'),
        meaning: 'Assured success, route, voyage, emigration, flight, change of place.'
    },
    {
        name: 'Judgement',
        image: require('./assets/tarotCards/judgement.png'),
        meaning: 'Change of position, renewal, outcome.'
    },
    {
        name: 'The Sun',
        image: require('./assets/tarotCards/theSun.png'),
        meaning: 'Material happiness, fortunate marriage, contentment.'
    },
    {
        name: 'The Moon',
        image: require('./assets/tarotCards/theMoon.png'),
        meaning: 'Hidden enemies, danger, calamity, darkness, terror, deception, error.'
    },
    {
        name: 'The Star',
        image: require('./assets/tarotCards/theStar.png'),
        meaning: 'Loss, theft, privation, abandonment, although another reading suggests hope and bright prospects in the future.'
    },
    {
        name: 'The Tower',
        image: require('./assets/tarotCards/theTower.png'),
        meaning: 'Misery, distress, ruin, indigence, adversity, calamity, disgrace, deception.'
    },
    {
        name: 'The Devil',
        image: require('./assets/tarotCards/theDevil.png'),
        meaning: 'Ravage, violence, force, vehemence, extraordinary efforts, fatality, that which is predestined but not for this reason evil.'
    },
    {
        name: 'Temperance',
        image: require('./assets/tarotCards/temperance.png'),
        meaning: 'Economy, moderation, frugality, management, accommodation.'
    },
    {
        name: 'Death',
        image: require('./assets/tarotCards/death.png'),
        meaning: 'End, mortality, destruction, corruption.'
    },
    {
        name: 'The Hanged Man',
        image: require('./assets/tarotCards/theHangedMan.png'),
        meaning: 'Wisdom, trials, circumspection, discernment, sacrifice, intuition, divination, prophecy.'
    },
    {
        name: 'Justice',
        image: require('./assets/tarotCards/justice.png'),
        meaning: 'Equity, rightness, probity, executive.'
    },
    {
        name: 'Wheel of Fortune',
        image: require('./assets/tarotCards/wheelOfFortune.png'),
        meaning: 'Destiny, fortune, success, luck, felicity.'
    },
    {
        name: 'The Hermit',
        image: require('./assets/tarotCards/theHermit.png'),
        meaning: 'Prudence, also and expecially treason, dissimulation, corruption, roguery.'
    },
    {
        name: 'Strength',
        image: require('./assets/tarotCards/strength.png'),
        meaning: 'Power, energy, action, courage, magnanimity.'
    },
    {
        name: 'The Chariot',
        image: require('./assets/tarotCards/theChariot.png'),
        meaning: 'Succor, providence, also war, triumph, presumption, vengeance, trouble.'
    },
    {
        name: 'The Lovers',
        image: require('./assets/tarotCards/theLovers.png'),
        meaning: 'Attraction, love, beauty, trials overcome.'
    },
    {
        name: 'The Hierophant',
        image: require('./assets/tarotCards/theHierophant.png'),
        meaning: 'Marriage alliance, captivity, servitude, mercy and goodness, inspiration, the man to whom the Querent has recourse.'
    },
    {
        name: 'The Emperor',
        image: require('./assets/tarotCards/theEmperor.png'),
        meaning: 'Stability, power, aid, protection, a great person, conviction, reason.'
    },
    {
        name: 'The Empress',
        image: require('./assets/tarotCards/theEmpress.png'),
        meaning: 'Fruitfulness, initiative, action, long days, clandestine, the unknown, difficulty, doubt, ignorance.'
    },
    {
        name: 'The High Priestess',
        image: require('./assets/tarotCards/theHighPriestess.png'),
        meaning: 'Secrets, mystery, the future as yet unrevealed, the woman who interests the Querent; the Querent silence, tenacity; wisdom, science.'
    },
    {
        name: 'The Magician',
        image: require('./assets/tarotCards/theMagician.png'),
        meaning: 'Skill, diplomacy, address, sickness, pain, loss, disaster, self-confidence, will, the Querent himself.'
    },
    {
        name: 'The Fool',
        image: require('./assets/tarotCards/theFool.png'),
        meaning: 'Folly, mania, extravagance, intoxication, delirium, frenzy, betrayment.'
    },
    {
        name: 'Card Back',
        image: require('./assets/tarotCards/tarotBack.jpg')
    },
]

export default cards