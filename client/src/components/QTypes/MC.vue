<template>
<div id="app" v-cloak>

  <div class="row">
    <div class="large-12 columns">
      <h1>{{ quiz.title }}</h1>

      <div class="callout">

        <div v-for="(question, index) in quiz.questions">
          <!-- Hide all questions, show only the one with index === to current question index -->
          <div v-show="index === questionIndex">
            <h3>{{ question.text }}</h3>
            <ol>
              <!-- for each response of the current question -->
              <li v-for="response in question.responses">
                <label>
								    <input type="radio"
								           v-bind:value="response.value"
								           v-bind:name="index"
								           v-model="userResponses[index]"> {{response.text}}
								  </label>
              </li>

            </ol>
            <!-- The two navigation buttons -->
            <!-- Note: prev is hidden on first question -->
            <button class="secondary button" v-if="questionIndex > 0" v-on:click="prev">
			        prev
			      </button>
            <button class="success button" v-on:click="next">
			        next
			      </button>
          </div>
        </div>

        <!-- Last page, quiz is finished, display result -->
        <div v-show="questionIndex === quiz.questions.length">
          <h3>Your Results</h3>
          <p>
            You are: {{ score() }}
          </p>
        </div>

      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  data () {
      "use strict";

window.onload = function() {

    var quiz = {
        title: 'What superhero are you?',

        questions: [{
                text: "How would you describe your personality?",
                responses: [{
                        text: 'Im serious and dark',
                        value: 'Batman'
                    },
                    {
                        text: 'Arrogant, but charming',
                        value: 'Superman'
                    },
                    {
                        text: 'Fun and easy going',
                        value: 'The Flash'
                    }
                ]
            },
            {
                text: "Why did you want to become a superhero?",
                responses: [{
                        text: 'For the thrills',
                        value: 'The Flash'
                    },
                    {
                        text: 'For justice',
                        value: 'Batman'
                    },
                    {
                        text: 'For popularity',
                        value: 'Superman'
                    }
                ]
            },
            {
                text: "Who would you most hang around with?",
                responses: [{
                        text: 'Wonder Woman',
                        value: 'Superman'
                    },
                    {
                        text: 'Green Arrow',
                        value: 'The Flash'
                    },
                    {
                        text: 'Robin',
                        value: 'Batman'
                    }
                ]
            },
            {
                text: "What's your favourite colour?",
                responses: [{
                        text: 'Black',
                        value: 'Batman'
                    },
                    {
                        text: 'Red',
                        value: 'The Flash'
                    },
                    {
                        text: 'Blue',
                        value: 'Superman'
                    }
                ]
            },
            {
                text: "When do you help people?",
                responses: [{
                        text: 'Every chance I can',
                        value: 'The Flash'
                    },
                    {
                        text: 'At night',
                        value: 'Batman'
                    },
                    {
                        text: 'When they need me to',
                        value: 'Superman'
                    }
                ]
            },
        ]
    };


    var app = new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array()
        },
        methods: {
            // Go to next question
            next: function() {
                this.questionIndex++;
                console.log(this.userResponses);
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                //find the highest occurence in responses
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            }
        }
    });
}
  }
}
</script>

<<style scoped>
#app {
	min-height: 100vh;

	background: #BBC7CE;
}

#app > .row {
	background: #fff;
}

h1 {
	margin-bottom: 20px;
}

[v-cloak] {
  display: none;
}
</style>