        function copyToClipboard(codeId) {
            var codeElement = document.querySelector(codeId);
            var range = document.createRange();
            range.selectNode(codeElement);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();

            // Create and show the modal
            var modal = document.createElement("div");
            modal.classList.add("modal", "show");
            modal.innerHTML = `
                <span class="close-btn">&times;</span>
                <p>Code copied to clipboard!</p>
            `;
            document.getElementById("modalContainer").appendChild(modal);

            // Auto-close the modal after 3 seconds
            setTimeout(function() {
                modal.classList.add("hide");
                setTimeout(function() {
                    modal.remove(); // Remove the modal completely after sliding out
                }, 500); // Wait for the slide-out transition
            }, 3000);

            // Close the modal when the user clicks on the close button
            var closeBtn = modal.querySelector(".close-btn");
            closeBtn.onclick = function() {
                modal.classList.add("hide");
                setTimeout(function() {
                    modal.remove(); // Remove the modal after it slides out
                }, 500);
            }
        }
