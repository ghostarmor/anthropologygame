var scenes = [];
var sceneIndex = 0;
var storyIndex = 0;
var questionIndex = 0;

var gameRunning = true;
var correctAnswers = 0;


let scene1 = {
    background: "scene1.jpeg",
    storyText: [
        "The Lumarians are an isolated society located on a remote island. They have a unique belief system and cultural practices shaped by their geographical location and available resources. The island is rich in volcanic soil, and the Lumarians have developed an agrarian society based on sustainable farming practices."
    ],
    questions: [

    ]
};

let scene2 = {
    background: "scene2.jpeg",
    storyText: [
        "The Lumarians practice terrace farming, utilizing the island's hilly terrain to maximize crop yield. They have developed advanced irrigation systems to ensure efficient water distribution."
    ],
    questions: [
        {
            question: "Which anthropological school of thought would view terrace farming as a result of the island's geographical feature of having hilly terrain?",
            qList: ['Cultural relativism', 'Functionalism', 'Cultural materialism', 'Feminist anthropology'],
            correctAnswer: 2,
            explanation: "A cultural materialist would view terrace farming as a result of the island’s geography because in that school of thought, cultural development and practices are thought to be driven by materials and conditions within the environment. In this case, the hilly terrain of the island is an environmental condition that is resulting in the Lumarians’ terrace farming practices. Cultural relativism states that you cannot objectively compare two cultures, which is irrelevant to this situation. Functionalism states that everything in a culture has the sole function of meeting the needs of the individuals of that culture. Although terrace farming is done in order to meet the need of food for Lumarians, a functionalist would not acknowledge the link between the island’s geography and the farming practice. Feminist anthropology focuses on the patriarchy and comparing women and men’s relations throughout different cultures, which does not relate to the question."
        }
    ]
};

let scene3 = {
    background: "scene3.jpeg",
    storyText: [
        "In the mystical land of Lumaria, the Lumarian people hold a deep reverence for their ancestors. Passed down through generations, the belief in ancestral spirits affects every aspect of Lumarian life. The Lumarians firmly believe that their ancestors continue to guide and influence their present existence. They seek their ancestors' wisdom in matters of love, family, governance, and even everyday decision-making."
    ],
    questions: [
        {
            question: "In Lumarian culture, the belief in ancestral spirits guiding everyday life and decision-making reflects:",
            qList: ['The cultural universals present in all human societies.', 'The necessity of religion in life.', 'The emphasis of spirituality in more exotic cultures.', 'The importance of culture over biology.'],
            correctAnswer: 3,
            explanation: "The Lumarian belief in ancestral spirits that guide everyday life emphasizes the importance of culture over biology because Lumarian life is heavily influenced by the cultural value that ancestral reverence holds, even though the ancestors are biologically dead. Additionally, this belief indirectly addresses the big question about what it means to be human, as the belief implies there is more to being human than just our nature or physicality. It also demonstrates one of the key flaws of the cultural materialism school of thought, which is that the theory oversimplifies complex parts of a culture and fails to consider spirituality. The first choice is not correct because the belief in ancestral spirits is not common across all cultures. The second choice is incorrect because the belief is not necessarily religious. Although it reflects their spiritual beliefs and practices, it is not enough to call it a religious belief, and it does not imply that religion is necessary for all people throughout different cultures either. The third choice is not only false, but it’s also an orientalist way of thinking because it perpetuates the stereotype of foreign Asian cultures being “exotic”."
        }
    ]
};

let scene4 = {
    background: "scene4.jpeg",
    storyText: [
        "As you journey deeper into the realm of Lumaria, you encounter a fascinating Lumarian institution known as the Council of Elders. This esteemed group of wise individuals holds significant influence in Lumarian society, guiding decision-making processes and ensuring the well-being of the community as a whole. The Council's decisions impact various aspects of Lumarian life, including resource allocation, cultural norms, and the distribution of power."
    ],
    questions: [
        {
            question: "According to cultural materialism, which of the following would the Council of Elders be an example of?",
            qList: ['Infrastructure', 'Structure', 'Superstructure'],
            correctAnswer: 1,
            explanation: "Influenced by Karl Marx, Marvin Harris’s cultural materialism theory separates culture into three levels, infrastructure, structure, and superstructure. Infrastructure consists of “material realities” such as technological, economic and reproductive (demographic) factors. Superstructure consists of ideology and symbolic aspects of culture such as religion, values, and art. Structure consists of organizational aspects of a culture such as the type of government, the economic system, and how people organize their families. The Council of Elders is an example of structure because they are a group of people who control the means of production and have lots of influence on Lumarian life as they are basically the government."
        },
        {
            question: "Would the Council of Elders also be classified as a structure under Marxist theory?",
            qList: ['No, it would be an example of superstructure.', 'Yes, it would be an example of structure.', 'No, it would be an example of infrastructure/base.', 'None of the above.'],
            correctAnswer: 0,
            explanation: "Although cultural materialism borrows heavily from Marxist theory, the structure distinctions are not the same. In cultural materialism, there’s three levels: infrastructure (materials and conditions), structure (organizational aspects of a culture), and superstructure (ideology and symbolism). However, in Marxist theory, there are only two distinctions. There is the base (infrastructure) and the superstructure. The organizational aspects would fall under the umbrella of superstructure under Marxist theory. So, the Council of Elders would be an example of superstructure, unlike in cultural materialism."
        },
        {
            question: "Which of the following aspects of Lumaria best represents cultural materialist superstructure?",
            qList: ['Terrace farming', 'Belief in ancestral spirits', 'Gold reserve', 'Communal living'],
            correctAnswer: 1,
            explanation: "Terrace farming is a cultural practice that would be classified as infrastructure by cultural materialists. A gold reserve is material goods which would also be infrastructure, but it could also be seen as a representation of the Lumarian economic system, in which case it could be seen as an example of structure. But in any case, it is not a superstructure. Communal living is an organizational aspect of the culture, making it an example of structure. The only superstructure is the Lumarian belief in ancestral spirits because it represents the culture’s ideology and way of thinking."
        }
    ]
};

let scene5 = {
    background: "scene5.jpeg",
    storyText: [
        "Deep within the heart of Lumaria, a darker truth lurks beneath the revered Council of Elders. As the decision-makers for the Lumarian society, the Council has slowly and subtly transformed their influence into a tool of exploitation. By manipulating the superstructure of the belief in ancestral spirits, they have cunningly preserved their power and perpetuated the systematic exploitation of the lower classes.",
        "Behind closed doors, the Council strategically reinforces the notion that the spirits of ancestors hold the key to prosperity and blessings. They claim to possess exclusive access to the ancestral realm and interpret the will of these revered spirits. Since the importance of ancestors is so vital to Lumarian culture, the citizens listen to the Council and abide by their decisions.",
        "Using this belief to their advantage, the Council gains control over crucial resources and wealth. They accumulate huge reserves of agricultural produce, livestock, and other valuable assets, while convincing Lumarians that they need the wealth to keep the divine guidance going. The lower classes, who work tirelessly in the fields and factories, are kept in an ongoing cycle of dependence and subservience, believing that their hard work pleases the ancestral spirits and ensures the prosperity of the community.",
        "Meanwhile, the Council lives luxuriously, enjoying the wealth gathered through the effort of others. They use their power to keep the illusion of benevolence going, which extends their reign. The Lumarian society, deeply rooted in the belief of ancestral spirits and the guidance of the Council, remains largely unaware of the exploitation taking place under the name of spiritual reverence."
    ],
    questions: [
        {
            question: "Would a cultural materialist recognize the hierarchy and exploitation in Lumarian culture?",
            qList: ['No', 'Yes'],
            correctAnswer: 1,
            explanation: "Cultural materialism does recognize the hierarchies that exist in different cultures because of factors such as class, sex, age, etc. Cultural materialists argue that the elite use resources to manipulate the structure and superstructure of a culture and ensure their dominance. Additionally, they argue that the elite exploit ideology to justify their actions and win over the citizens, as seen in this case with the Council of Elders exploiting the superstructure of believing in ancestral spirits. An interesting note is that on first glance, it seems like the cultural materialist argument of the elite using superstructure to garner more resources seems contradictory to their notion that infrastructure is the driving force in culture. To me, this argument seemed more aligned with Marxist theory, where the base and superstructure have a reciprocal relationship and both influence each other. However, the idea that the elite use superstructure to rationalize their actions is still valid under cultural materialism because the theory doesn’t deny that superstructure can have some influence on infrastructure, but instead it just maintains that infrastructure is still the most important factor in shaping culture. Cultural materialists would also dismiss the allegation of this contradiction on the basis that the Council of Elders is not creating the superstructure out of thin air, rather it’s just using existing cultural elements that they would argue were only present because of material conditions."
        },
        {
            question: "From the exploitation from the Council of Elders, which term best describes the relationship between culture, power, and knowledge? Choose the answer that best applies to this case.",
            qList: ['Interconnected', 'Primarily culture-driven', 'Primary knowledge-driven', 'No link'],
            correctAnswer: 0,
            explanation: "Culture, power, and knowledge are interconnected by nature, which means that they all affect each other. In this situation, the Council of Elders uses <b>culture</b> as a basis to spread false <b>knowledge</b> about themselves being the only entity who can interpret the will of the ancestral spirits, which results in them keeping <b>power</b>.<br><br>Something to Note: This question is rather open-ended but for this game, I set a definitive correct answer based on my personal opinion. How does this relate to the big question of whether we can avoid bias in anthropology? Even after realizing my own biases, I did not create a question format for the more open-ended questions because it would simply be too much work for the given deadline, this micro example could give an insight into why bias is so difficult to remove for anthropologists as they too are often times working with stress, deadlines and pressure to get certain results."
        }
    ]
};

let scene6 = {
    background: "scene6.jpeg",
    storyText: [
        "In Lumarian culture, gender roles are deeply ingrained and shape the dynamics of everyday life. Traditional gender expectations assign distinct responsibilities and roles to men and women, influencing their interactions and contributions to the community. These roles are reinforced through a significant gender-based rite of passage, marking the transition from adolescence to adulthood.",
        "For young Lumarian men, the rite of passage involves a test of physical endurance and bravery. They go on a challenging journey into the sacred forest, facing natural obstacles and symbolic trials that push their limits. Successful completion signifies their readiness to take on male responsibilities such as constructing and maintaining terraces for farming.",
        "Similarly, Lumarian women go through a distinct gender-based rite of passage that emphasizes their nurturing qualities and connection to nature. They take place in a sacred ceremony where they demonstrate their knowledge of medicinal plants, their ability to care for others, and their understanding of the community's cultural traditions. Through this rite of passage, they are recognized as fully-fledged women who contribute by tackling female responsibilities such as the cultivation and tending of crops on the terraces."
    ],
    questions: [
        {
            question: "How would a cultural materialist analysis of Lumarian gender roles compare to a feminist anthropology analysis?",
            qList: ['Cultural materialism: Interpretation-based, non-critical, focuses on material conditions<br>Feminist Anthropology: Objective evidence, critical, focuses on inequalities and oppression', 'Cultural materialism: Objective evidence, critical, focuses on inequalities and oppression<br>Feminist Anthropology: Interpretation-based, non-critical, focuses on benefit of gender roles to society', 'Cultural materialism: Objective evidence, critical, focuses on material conditions<br>Feminist Anthropology: Interpretation-based, critical, focuses on inequalities and oppression'],
            correctAnswer: 2,
            explanation: "The main differences between the analysis that would be provided by each school of thought is that cultural materialism would mainly focus on material conditions, evolutionary concepts and its effect on gender roles, and that it would study the scenario in an objective manner and attempt to collect empirical evidence. Feminist anthropologists would not focus on infrastructure because they see gender roles as more complex than a simple manifestation of the materials and conditions of a culture. They would also be adopting an emic perspective that’s based on internal understanding and interpretation rather than objective analysis. For example, a cultural materialist might argue that the terrace farming labour is divided into gender roles because the material conditions of the land make the construction and maintenance of the terraces physically demanding, and since men are biologically stronger than women, they are assigned with that role. A feminist anthropologist would analyze the terrace farming division of labour in a different way, in which they focus on inequalities and consequences of gender roles."
        }
    ]
};

let scene7 = {
    background: "scene7.jpeg",
    storyText: [
        "Congratulations, you've successfully learned about Lumarian life through the lens of cultural materialism! To see how well you answered questions, click the next icon."
    ],
    questions: [

    ]
};

scenes.push(scene1);
scenes.push(scene2);
scenes.push(scene3);
scenes.push(scene4);
scenes.push(scene5);
scenes.push(scene6);
scenes.push(scene7);

let isQuestionDone = true;

function next() {
    if (!gameRunning) return;
    let scene = scenes[sceneIndex]


    if (storyIndex + 1 > scene.storyText.length) {
        //Time for question
        if (questionIndex + 1 > scene.questions.length) {
            //Next scene
            console.log('switching scenes...');
            nextScene();
            return;
        }

        //Ask question

        scene.questions.forEach(element => {
            console.log('showing question...');
            showQuestion(sceneIndex);
        });

    } else {
        console.log('showing story...');
        let h2 = document.getElementsByClassName('storyText')[0];
        h2.style.display = 'inline';
        h2.style.animation = 'none';
        h2.offsetHeight; /* trigger reflow */
        h2.style.animation = "fadeIn 2s";
        h2.innerText = scene.storyText[storyIndex];
        let nextBtn = document.createElement('a');
        nextBtn.classList.add("badge");
        nextBtn.classList.add("badge-primary");
        nextBtn.onclick = function () { next() };
        nextBtn.innerText = ">>>";
        h2.appendChild(nextBtn);
        storyIndex++;
    }
}

function showQuestion(scIndex) {
    if(scIndex != sceneIndex) return;
    if (isQuestionDone) {
        question = scenes[sceneIndex].questions[questionIndex];
        //console.log(question);
        isQuestionDone = false;
        let storyText = document.getElementsByClassName('storyText')[0];
        storyText.style.display = "none";
        let h2 = document.createElement('h2');
        h2.style.top = "50%";
        h2.innerText = question.question;
        h2.classList.add('questionText');
        document.body.appendChild(h2);

        let listGroup = document.createElement('div');
        listGroup.style.opacity = '0';
        listGroup.classList.add('list-group');
        listGroup.classList.add('mc-answer-list');
        for (let i = 0; i < question.qList.length; i++) {
            let mcAnswer = document.createElement('button');
            mcAnswer.setAttribute('type', 'button');
            mcAnswer.classList.add('list-group-item');
            mcAnswer.classList.add('list-group-item-action');
            mcAnswer.style.marginBottom = "10px";
            mcAnswer.style.borderRadius = "0.25rem";
            mcAnswer.innerHTML = question.qList[i];
            mcAnswer.onclick = function () { onSelectAnswer(this) };
            listGroup.appendChild(mcAnswer);

        }
        document.body.appendChild(listGroup);
        let submitBtn = document.getElementsByClassName('question-submit')[0];
        submitBtn.style.display = "inherit";
        submitBtn.classList.remove('question-submit');
        submitBtn.offsetHeight; /* trigger reflow */
        submitBtn.classList.add('question-submit');
;
        
    } else {
        setTimeout(showQuestion, 100, sceneIndex);
    }

}

function onSelectAnswer(node) {
    node.parentElement.style.animation = "none";
    node.parentElement.style.opacity = "1";
    node.parentElement.childNodes.forEach(element => {
        element.classList.remove('active');
    });
    node.classList.add('active');
}

function checkAnswer() {
    let selectedAnswer = document.getElementsByClassName('active')[0].innerHTML;
    question = scenes[sceneIndex].questions[questionIndex];

    let alert = document.getElementsByClassName('explanation')[0];
    if (question.qList[question.correctAnswer] === selectedAnswer) {
        //Show correct + explanation pop-up
        alert.classList.add('alert-success');
        alert.style.visibility = 'visible';
        alert.getElementsByTagName('h4')[0].innerText = "Correct!";
        alert.getElementsByTagName('p')[0].innerHTML = question.explanation;
        correctAnswers++;
        var audio = new Audio('audio/positivealert.wav');
        audio.play();
    } else {
        //Show incorrect + explanation pop-up
        if(sceneIndex == 5){
            console.log(question.qList[question.correctAnswer]);
            console.log(selectedAnswer);
        }
        
        alert.classList.add('alert-danger');
        alert.style.visibility = 'visible';
        alert.getElementsByTagName('h4')[0].innerText = "Incorrect!";
        alert.getElementsByTagName('p')[0].innerHTML = question.explanation;
        var audio = new Audio('audio/negativealert.wav');
        audio.play();
    }
    let submitBtn = document.getElementsByClassName('question-submit')[0];
    submitBtn.style.display - "none";

}

function explanationRead(explanationNode) {
    if (explanationNode.classList.contains('alert-success')) explanationNode.classList.remove('alert-success');
    if (explanationNode.classList.contains('alert-danger')) explanationNode.classList.remove('alert-danger');
    explanationNode.style.visibility = 'hidden';
    document.getElementsByClassName('question-submit')[0].style.display = "none";
    document.getElementsByClassName('questionText')[0].remove();
    document.getElementsByClassName('list-group')[0].remove();
    questionIndex++;
    isQuestionDone = true;
    next();
}

function nextScene() {
    sceneIndex++;
    storyIndex = 0;
    questionIndex = 0;
    
    let bg = document.getElementById('background');
    bg.style.animation = "fadeOut 2s";
    
    if (sceneIndex + 1 > scenes.length) {
        var audio = new Audio('audio/sceneswitch.wav');
        audio.play();
        //Game Over
        let storyText = document.getElementsByClassName('storyText')[0];
        storyText.style.animation = 'none';
        storyText.offsetHeight; /* trigger reflow */
        storyText.style.animation = "fadeOut 2s";
        window.setTimeout(function(){
            console.log("Game over!")
            sessionStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
            gameRunning = false;
            location.href = 'end.html';
        }, 1000);
        
        return;
    }


    
    window.setTimeout(function () {
        bg.src = "imgs/" + scenes[sceneIndex].background;
        bg.style.animation = 'none';
        bg.offsetHeight; /* trigger reflow */
        bg.style.animation = "fadeIn 3s";
    }, 1000);
    if(sceneIndex == 4){
        var audio = new Audio('audio/terror.wav');
        audio.play();
    } else{
        var audio = new Audio('audio/sceneswitch.wav');
        audio.play();
    }
    
    
    
    next();
}
