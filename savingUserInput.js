savingUserInput.js

const userCommentInput = document.getElementbyId('comment');
                        const saveStatus = document.getElementById('save-status');
                        function debounce(func, delay) {
                            let timeoutId;
                            return function (...args) {
                            clearTimeout(timeoutId);
                            timeoutId = setTimeout(() => {
                                func.apply(this, args);
                            }, delay);
                        };
                    }
                    const saveData = debounce(() => {
                    const comment = commentInput.value;
                    localStorage.setItem('Comment', comment);
                        saveStatus.textContent = 'Saving...';
    
                        setTimeout(() => {
                        saveStatus.textContent = 'Saved!';
                         }, 500)
                    }, 500);

                    window.addEventListener('load', () => {
                    const savedComment = localStorage.getItem('comment');
                    if (savedComment) {
                        commentInput.value = savedComment;
                    }
                  });

                commentInput.addEventListener('input', saveData);
