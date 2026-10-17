import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {};
    correctanwser = 0;
    Reviewhanlder = false;
    questions = [
        {
            id: 'question1',
            question: 'which one of this not template loop?',
            answers: {
                a: 'for:each',
                b: 'iterator',
                c: 'maploop'
            },
            correctanswer: 'c'
        },
        {
            id: 'question2',
            question: 'which one of file is invalid in LWC?',
            answers: {
                a: '.css',
                b: '.js',
                c: '.lwc'
            },
            correctanswer: 'c'
        },
        {
            id: 'question3',
            question: 'which one of following is not a directive?',
            answers: {
                a: 'for:each',
                b: '@track',
                c: 'if:true'
            },
            correctanswer: 'b'
        }
    ];
    get disableHandle() {
        return !(Object.keys(this.selected).length === this.questions.length);
    }
    get isScoredFull() {
        return `slds-text-heading_large ${
            this.questions.length === this.correctanwser ? 'slds-text-color_success' : 'slds-text-color_error'
        }`;
    }

    changehanlder(event) {
        console.log('name', event.target.name);
        console.log('value', event.target.value);

        const { name, value } = event.target;

        this.selected = { ...this.selected, [name]: value };
    }

    SubmitHandler(event) {
        event.preventDefault();
        this.correct = this.questions.filter((items) => this.selected[items.id] === items.correctanswer);
        this.correctanwser = this.correct.length;
        this.Reviewhanlder = true;
        console.log('this.correctanswer ', this.correctanwser);
    }

    ResetHanlder() {
        this.correctanwser = 0;
        this.selected = {};
        this.Reviewhanlder = false;

        // Look up all radio inputs rendered by this component and uncheck them
        const radioButtons = this.template.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((button) => {
            button.checked = false;
        });
    }
}
