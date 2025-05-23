// Main Application Logic
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const casesNavBtn = document.getElementById('cases-nav-btn');
    const vocabNavBtn = document.getElementById('vocab-nav-btn');
    const casesMobileBtn = document.getElementById('cases-mobile-btn');
    const vocabMobileBtn = document.getElementById('vocab-mobile-btn');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const casesSection = document.getElementById('cases-section');
    const vocabularySection = document.getElementById('vocabulary-section');
    const casesQuizContainer = document.getElementById('cases-quiz');
    const vocabularyQuizContainer = document.getElementById('vocabulary-quiz');
    const currentYearSpan = document.getElementById('current-year');

    // Set current year in footer
    currentYearSpan.textContent = new Date().getFullYear();

    // State
    let isMobileMenuOpen = false;
    let activeSection = 'cases';
    
    // Cases Quiz State
    let casesQuestions = [];
    let currentCaseQuestionIndex = 0;
    let selectedCaseAnswer = null;
    let isCaseAnswerCorrect = null;
    let casesScore = 0;
    let showCasesResult = false;
    let casesTimer = 0;
    let casesTimerInterval = null;
    
    // Vocabulary Quiz State
    let vocabularyWords = [];
    let currentVocabWordIndex = 0;
    let selectedArticle = null;
    let isArticleCorrect = null;
    let vocabScore = 0;
    let showVocabResult = false;
    let vocabTimer = 0;
    let vocabTimerInterval = null;
    let vocabLevel = 'all';

    // Initialize
    initCasesQuiz();
    initVocabularyQuiz();

    // Event Listeners
    casesNavBtn.addEventListener('click', () => switchSection('cases'));
    vocabNavBtn.addEventListener('click', () => switchSection('vocabulary'));
    casesMobileBtn.addEventListener('click', () => {
        switchSection('cases');
        toggleMobileMenu();
    });
    vocabMobileBtn.addEventListener('click', () => {
        switchSection('vocabulary');
        toggleMobileMenu();
    });
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Functions
    function switchSection(section) {
        activeSection = section;
        
        // Update navigation active states
        casesNavBtn.classList.toggle('active', section === 'cases');
        vocabNavBtn.classList.toggle('active', section === 'vocabulary');
        casesMobileBtn.classList.toggle('active', section === 'cases');
        vocabMobileBtn.classList.toggle('active', section === 'vocabulary');
        
        // Show/hide sections
        casesSection.classList.toggle('hidden', section !== 'cases');
        vocabularySection.classList.toggle('hidden', section !== 'vocabulary');
    }

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        mobileMenu.classList.toggle('show', isMobileMenuOpen);
    }

    // Format time (mm:ss)
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Shuffle array
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // Get random items from array
    function getRandomItems(array, count) {
        return shuffleArray(array).slice(0, count);
    }

    // CASES QUIZ FUNCTIONS
    function initCasesQuiz() {
        // Generate a new set of questions each time
        casesQuestions = getRandomItems(allCaseQuestions, allCaseQuestions.length);
        currentCaseQuestionIndex = 0;
        selectedCaseAnswer = null;
        isCaseAnswerCorrect = null;
        casesScore = 0;
        showCasesResult = false;
        casesTimer = 0;
        
        if (casesTimerInterval) {
            clearInterval(casesTimerInterval);
        }
        
        casesTimerInterval = setInterval(() => {
            if (!showCasesResult) {
                casesTimer++;
                updateCasesQuizUI();
            }
        }, 1000);
        
        updateCasesQuizUI();
    }

    function updateCasesQuizUI() {
        if (showCasesResult) {
            renderCasesResults();
        } else {
            renderCasesQuestion();
        }
    }

    function renderCasesQuestion() {
        const question = casesQuestions[currentCaseQuestionIndex];
        
        casesQuizContainer.innerHTML = `
            <div class="quiz-header">
                <div>Question ${currentCaseQuestionIndex + 1}/${casesQuestions.length}</div>
                <div>Score: ${casesScore}</div>
                <div>Time: ${formatTime(casesTimer)}</div>
            </div>
            
            <div class="quiz-question">
                <h3>What is the correct form for <b>${question.pronoun}</b> (${question.type})?</h3>
            </div>
            
            <div class="options-container">
                <div class="options-grid">
                    ${question.options.map(option => `
                        <button 
                            class="option-button ${
                                selectedCaseAnswer === option
                                    ? isCaseAnswerCorrect
                                        ? 'selected-correct'
                                        : 'selected-incorrect'
                                    : selectedCaseAnswer !== null && option === question.correctAnswer
                                    ? 'correct'
                                    : ''
                            } ${selectedCaseAnswer !== null ? 'disabled' : ''}"
                            data-answer="${option}"
                        >
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="quiz-controls">
                <button class="control-button stop-button" id="stop-cases-quiz">
                    Stop Quiz
                </button>
                ${selectedCaseAnswer !== null && !isCaseAnswerCorrect ? `
                    <button class="control-button next-button" id="next-case-question">
                        Next Question
                    </button>
                ` : ''}
            </div>
        `;
        
        // Add event handlers
        document.querySelectorAll('[data-answer]').forEach(button => {
            button.addEventListener('click', () => {
                if (selectedCaseAnswer === null) {
                    handleCaseAnswerSelect(button.getAttribute('data-answer'));
                }
            });
        });
        
        document.getElementById('stop-cases-quiz').addEventListener('click', stopCasesQuiz);
        
        if (selectedCaseAnswer !== null && !isCaseAnswerCorrect) {
            document.getElementById('next-case-question').addEventListener('click', handleNextCaseQuestion);
        }
    }

    function handleCaseAnswerSelect(answer) {
        if (selectedCaseAnswer !== null) return;
        
        selectedCaseAnswer = answer;
        const currentQuestion = casesQuestions[currentCaseQuestionIndex];
        isCaseAnswerCorrect = answer === currentQuestion.correctAnswer;
        
        if (isCaseAnswerCorrect) {
            casesScore++;
            // Auto-next on correct answer after a short delay
            setTimeout(() => {
                handleNextCaseQuestion();
            }, 1000);
        }
        
        updateCasesQuizUI();
    }

    function handleNextCaseQuestion() {
        if (currentCaseQuestionIndex < casesQuestions.length - 1) {
            currentCaseQuestionIndex++;
            selectedCaseAnswer = null;
            isCaseAnswerCorrect = null;
            updateCasesQuizUI();
        } else {
            // If we've reached the end of the current set, generate a new set
            casesQuestions = getRandomItems(allCaseQuestions, allCaseQuestions.length);
            currentCaseQuestionIndex = 0;
            selectedCaseAnswer = null;
            isCaseAnswerCorrect = null;
            updateCasesQuizUI();
        }
    }

    function renderCasesResults() {
        casesQuizContainer.innerHTML = `
            <div class="results-container">
                <h2 class="results-title">Quiz Results</h2>
                <div class="results-stats">
                    <p>Your score: <span class="highlight">${casesScore}/${casesQuestions.length}</span></p>
                    <p>Percentage: <span class="highlight">${Math.round((casesScore / casesQuestions.length) * 100)}%</span></p>
                    <p>Time taken: <span class="highlight">${formatTime(casesTimer)}</span></p>
                </div>
                <button class="try-again-button" id="cases-try-again">
                    Try Again
                </button>
            </div>
        `;
        
        document.getElementById('cases-try-again').addEventListener('click', initCasesQuiz);
    }

    function stopCasesQuiz() {
        showCasesResult = true;
        clearInterval(casesTimerInterval);
        updateCasesQuizUI();
    }

    // VOCABULARY QUIZ FUNCTIONS
    function initVocabularyQuiz() {
        // Generate a new set of vocabulary words each time
        vocabularyWords = getVocabularyByLevel(vocabLevel, 20);
        currentVocabWordIndex = 0;
        selectedArticle = null;
        isArticleCorrect = null;
        vocabScore = 0;
        showVocabResult = false;
        vocabTimer = 0;
        
        if (vocabTimerInterval) {
            clearInterval(vocabTimerInterval);
        }
        
        vocabTimerInterval = setInterval(() => {
            if (!showVocabResult) {
                vocabTimer++;
                updateVocabularyQuizUI();
            }
        }, 1000);
        
        updateVocabularyQuizUI();
    }

    function getVocabularyByLevel(level, count) {
        if (level === 'all') {
            return getRandomItems(allVocabulary, count);
        } else {
            const filteredWords = allVocabulary.filter(word => word.level === level);
            return getRandomItems(filteredWords, count);
        }
    }

    function updateVocabularyQuizUI() {
        if (showVocabResult) {
            renderVocabularyResults();
        } else {
            renderVocabularyQuestion();
        }
    }

    function renderVocabularyQuestion() {
        const word = vocabularyWords[currentVocabWordIndex];
        
        // Generate article options
        const articleOptions = ['der', 'die', 'das'];
        if (word.article === null) {
            articleOptions.push('none');
        }
        
        vocabularyQuizContainer.innerHTML = `
            <div class="quiz-header">
                <div>Question ${currentVocabWordIndex + 1}/${vocabularyWords.length}</div>
                <div>Score: ${vocabScore}</div>
                <div>Time: ${formatTime(vocabTimer)}</div>
            </div>
            
            <div class="level-selector">
                <button class="level-button ${vocabLevel === 'all' ? 'active' : ''}" data-level="all">All Levels</button>
                <button class="level-button ${vocabLevel === 'A1' ? 'active' : ''}" data-level="A1">A1</button>
                <button class="level-button ${vocabLevel === 'A2' ? 'active' : ''}" data-level="A2">A2</button>
            </div>
            
            <div class="quiz-question">
                <h3>Select the correct article:</h3>
                <div class="word-display">
                    <p>_____ ${word.word}</p>
                    <div class="word-level">Level: ${word.level}</div>
                </div>
            </div>
            
            <div class="options-container">
                <div class="options-grid">
                    ${articleOptions.map(article => `
                        <button 
                            class="option-button ${
                                selectedArticle === article
                                    ? isArticleCorrect
                                        ? 'selected-correct'
                                        : 'selected-incorrect'
                                    : selectedArticle !== null && article === word.article
                                    ? 'correct'
                                    : ''
                            } ${selectedArticle !== null ? 'disabled' : ''}"
                            data-article="${article}"
                        >
                            ${article}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="quiz-controls">
                <button class="control-button stop-button" id="stop-vocab-quiz">
                    Stop Quiz
                </button>
                ${selectedArticle !== null && !isArticleCorrect ? `
                    <button class="control-button next-button" id="next-vocab-question">
                        Next Question
                    </button>
                ` : ''}
            </div>
        `;
        
        // Add event handlers
        document.querySelectorAll('[data-article]').forEach(button => {
            button.addEventListener('click', () => {
                if (selectedArticle === null) {
                    handleArticleSelect(button.getAttribute('data-article'));
                }
            });
        });
        
        document.querySelectorAll('.level-button').forEach(button => {
            button.addEventListener('click', () => {
                handleLevelChange(button.getAttribute('data-level'));
            });
        });
        
        document.getElementById('stop-vocab-quiz').addEventListener('click', stopVocabQuiz);
        
        if (selectedArticle !== null && !isArticleCorrect) {
            document.getElementById('next-vocab-question').addEventListener('click', handleNextVocabQuestion);
        }
    }

    function handleArticleSelect(article) {
        if (selectedArticle !== null) return;
        
        selectedArticle = article;
        const currentWord = vocabularyWords[currentVocabWordIndex];
        isArticleCorrect = article === currentWord.article;
        
        if (isArticleCorrect) {
            vocabScore++;
        }
        
        // Proceed to the next question immediately
        setTimeout(() => {
            handleNextVocabQuestion();
        }, 1000);
        
        updateVocabularyQuizUI();
    }

    function handleNextVocabQuestion() {
        if (currentVocabWordIndex < vocabularyWords.length - 1) {
            currentVocabWordIndex++;
            selectedArticle = null;
            isArticleCorrect = null;
            updateVocabularyQuizUI();
        } else {
            // If we've reached the end of the current set, check if the user can proceed to the next level
            const percentage = (vocabScore / vocabularyWords.length) * 100;
            if (percentage > 70) {
                // Proceed to the next level
                vocabLevel = vocabLevel === 'A1' ? 'A2' : 'A1';
                vocabularyWords = getVocabularyByLevel(vocabLevel, 20);
                currentVocabWordIndex = 0;
                selectedArticle = null;
                isArticleCorrect = null;
                updateVocabularyQuizUI();
            } else {
                // Show results and allow the user to try again
                showVocabResult = true;
                clearInterval(vocabTimerInterval);
                updateVocabularyQuizUI();
            }
        }
    }

    function renderVocabularyResults() {
        vocabularyQuizContainer.innerHTML = `
            <div class="results-container">
                <h2 class="results-title">Quiz Results</h2>
                <div class="results-stats">
                    <p>Your score: <span class="highlight">${vocabScore}/${vocabularyWords.length}</span></p>
                    <p>Percentage: <span class="highlight">${Math.round((vocabScore / vocabularyWords.length) * 100)}%</span></p>
                    <p>Time taken: <span class="highlight">${formatTime(vocabTimer)}</span></p>
                </div>
                <button class="try-again-button" id="vocab-try-again">
                    Try Again
                </button>
            </div>
        `;
        
        document.getElementById('vocab-try-again').addEventListener('click', initVocabularyQuiz);
    }

    function stopVocabQuiz() {
        showVocabResult = true;
        clearInterval(vocabTimerInterval);
        updateVocabularyQuizUI();
    }

    function handleLevelChange(level) {
        vocabLevel = level;
        initVocabularyQuiz();
    }

    // Expose functions to global scope for HTML onclick handlers
    window.handleCaseAnswerSelect = handleCaseAnswerSelect;
    window.handleNextCaseQuestion = handleNextCaseQuestion;
    window.stopCasesQuiz = stopCasesQuiz;
    window.handleArticleSelect = handleArticleSelect;
    window.handleNextVocabQuestion = handleNextVocabQuestion;
    window.stopVocabQuiz = stopVocabQuiz;
});
