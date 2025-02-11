class ProblemGenerator {
    constructor() {
        // Pre-generated set of problems
        this.problemSet = [
            { problem: "2x = 8", answer: "4", options: ["3", "4", "5"] },
            { problem: "3x = 12", answer: "4", options: ["2", "4", "6"] },
            { problem: "4x = 16", answer: "4", options: ["4", "5", "6"] },
            { problem: "5x = 15", answer: "3", options: ["2", "3", "4"] },
            { problem: "2x = 6", answer: "3", options: ["2", "3", "4"] },
            { problem: "3x = 9", answer: "3", options: ["2", "3", "4"] },
            { problem: "4x = 12", answer: "3", options: ["2", "3", "4"] },
            { problem: "6x = 18", answer: "3", options: ["2", "3", "4"] },
            { problem: "2x = 10", answer: "5", options: ["4", "5", "6"] },
            { problem: "3x = 15", answer: "5", options: ["4", "5", "6"] },
            { problem: "4x = 20", answer: "5", options: ["4", "5", "6"] },
            { problem: "5x = 25", answer: "5", options: ["4", "5", "6"] },
            { problem: "2x = 4", answer: "2", options: ["1", "2", "3"] },
            { problem: "3x = 6", answer: "2", options: ["1", "2", "3"] },
            { problem: "4x = 8", answer: "2", options: ["1", "2", "3"] },
            { problem: "5x = 10", answer: "2", options: ["1", "2", "3"] },
            { problem: "2x = 12", answer: "6", options: ["5", "6", "7"] },
            { problem: "3x = 18", answer: "6", options: ["5", "6", "7"] },
            { problem: "4x = 24", answer: "6", options: ["5", "6", "7"] },
            { problem: "5x = 30", answer: "6", options: ["5", "6", "7"] }
        ];
        
        // Keep track of recently used problems
        this.recentProblems = new Set();
        this.maxRecentProblems = 5;
    }

    async generateProblem() {
        // Filter out recently used problems
        const availableProblems = this.problemSet.filter(p => !this.recentProblems.has(p.problem));
        
        // If we've used all problems, clear the recent problems set
        if (availableProblems.length === 0) {
            this.recentProblems.clear();
            return this.generateProblem();
        }

        // Pick a random problem from available ones
        const randomIndex = Math.floor(Math.random() * availableProblems.length);
        const selectedProblem = availableProblems[randomIndex];

        // Add to recent problems
        this.recentProblems.add(selectedProblem.problem);
        if (this.recentProblems.size > this.maxRecentProblems) {
            this.recentProblems.delete(this.recentProblems.values().next().value);
        }

        // Shuffle the options
        const shuffledOptions = this.shuffleArray([...selectedProblem.options]);

        return {
            problem: selectedProblem.problem,
            answer: selectedProblem.answer,
            options: shuffledOptions
        };
    }

    // Fisher-Yates shuffle algorithm for randomizing answer options
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
}

// Export the class for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProblemGenerator;
}
