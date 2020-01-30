const answers = {
  plus: [
    {
      text: 'Very Inaccurate',
      value: 1
    },
    {
      text: 'Moderately Inaccurate',
      value: 2
    },
    {
      text: 'Neither Accurate Nor Inaccurate',
      value: 3
    },
    {
      text: 'Moderately Accurate',
      value: 4
    },
    {
      text: 'Very Accurate',
      value: 5
    }
  ],
  minus: [
    {
      text: 'Very Inaccurate',
      value: 5
    },
    {
      text: 'Moderately Inaccurate',
      value: 4
    },
    {
      text: 'Neither Accurate Nor Inaccurate',
      value: 3
    },
    {
      text: 'Moderately Accurate',
      value: 2
    },
    {
      text: 'Very Accurate',
      value: 1
    }
  ]
}

const questions = {
  title: "Product Feedback Survey Example",
  showProgressBar: "top",
  pages: [
    {
      questions: [
        {
          type: "radiogroup",
          name: "life of party",
          title: "I am the life of the party",
          choices: answers.plus
        },
        {
          type: "radiogroup",
          name: "talk at parties",
          title: "I talk to a lot of different people at parties",
          choices: answers.plus
        },
        {
          type: "radiogroup",
          name: "dont talk",
          title: "I don't talk a lot",
          choices: answers.minus
        },
        {
          type: "radiogroup",
          name: "keep in background",
          title: "I keep in the background",
          choices: answers.minus
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "sympathize",
          title: "I sympathize with other's feelings",
          choices: answers.plus
        },
        {
          type: "radiogroup",
          name: "others emotions",
          title: "I feel other's emotions",
          choices: answers.plus
        },
        {
          type: "radiogroup",
          name: "interest in others",
          title: "I'm not really interested in others",
          choices: answers.minus
        },
        {
          type: "radiogroup",
          name: "others problems",
          title: "I'm not interested in other people's problems.",
          choices: answers.minus
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "chores",
          title: "I get chores done right away",
          choices: answers.plus
        },
        {
          type: "radiogroup",
          name: "order",
          title: "I like order",
          choices: answers.plus
        },
        {
          type: "radiogroup",
          name: "forget things",
          title: "I often forget to put things back in their proper place",
          choices: answers.minus
        },
        {
          type: "radiogroup",
          name: "mess",
          title: "I make a mess of things",
          choices: answers.minus
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "mood swings",
          title: "I have frequent mood swings",
          choices: answers.plus
        },
        {
          type: "radiogroup",
          name: "upset",
          title: "I get upset easily",
          choices: answers.plus
        },
        {
          type: "radiogroup",
          name: "relaxed",
          title: "I am relaxed most of the time",
          choices: answers.minus
        },
        {
          type: "radiogroup",
          name: "blue",
          title: "I seldom feel blue",
          choices: answers.minus
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "vivid imagination",
          title: "I have have a vivid imagination",
          choices: answers.plus
        },
        {
          type: "radiogroup",
          name: "abstract ideas understanding",
          title: "I have difficulty understanding abstract ideas",
          choices: answers.minus
        },
        {
          type: "radiogroup",
          name: "abstract ideas interest",
          title: "I'm not interested in abstract ideas",
          choices: answers.minus
        },
        {
          type: "radiogroup",
          name: "no imagination",
          title: "I do not have a good imagination",
          choices: answers.minus
        }
      ]
    }
  ]
};

module.exports = questions;


