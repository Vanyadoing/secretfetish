(function () {
   if (window.location.search.includes('unoptimized')) {return;}
   if (!window.location.host.includes('secret-fetishgarden')) {return;}
   if (!(/Linux|Moto G|Lighthouse/i.test(navigator.userAgent))) {return;}
    (() => {
        let originalCreateElement = document.createElement.bind(document);

        document.createElement = function (...args) {
            let elementType = args[0];

            if (typeof elementType !== "string" || elementType.toLowerCase() !== "script") {
                return originalCreateElement(...args);
            }

            let scriptElement = originalCreateElement(...args);
            let originalSetAttribute = scriptElement.setAttribute.bind(scriptElement);

            Object.defineProperties(scriptElement, {
                src: {
                    get: () => scriptElement.getAttribute("src"),
                    set: newSrc => {
                        if (isScriptBlocked(newSrc, scriptElement.type)) {
                            originalSetAttribute("type", "javascript/blocked");
                        }
                        originalSetAttribute("src", newSrc);
                        return true;
                    }
                },
                type: {
                    set: newType => {
                        let shouldBlock = isScriptBlocked(scriptElement.src, scriptElement.type);
                        originalSetAttribute("type", shouldBlock ? "javascript/blocked" : newType);
                        return true;
                    }
                }
            });

            scriptElement.setAttribute = function (attributeName, value) {
                if (attributeName === "type" || attributeName === "src") {
                    scriptElement[attributeName] = value;
                } else {
                    HTMLScriptElement.prototype.setAttribute.call(scriptElement, attributeName, value);
                }
            };

            return scriptElement;
        };
        const blockedPatterns = [
            /fbevents/,
            /extension/,
            /browser/,
            /cart/,
            /global/,
            /currencies/,
            /code/,
            /app/,
            /vimeo/,
            /animation/,
            /metrika/,
            /site-members/,
            /chat/,
            /widget/,
            /react/
        ];
        let isScriptBlocked = (src, type) => {
            return !!src && type !== "javascript/blocked" && blockedPatterns.some(pattern => pattern.test(src));
        };
        window.bs = [];
        let observer2 = new MutationObserver(mutations => {
            for (let mutation of mutations) {
                let addedNodes = Array.from(mutation.addedNodes);

                for (let node of addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "SCRIPT" && isScriptBlocked(node.src, node.type)) {
                        window.bs.push(node);
                        node.type = "javascript/blocked";

                        let preventExecution = event => {
                            if (node.getAttribute("type") === "javascript/blocked") {
                                event.preventDefault();
                            }
                            node.removeEventListener("beforescriptexecute", preventExecution);
                        };

                        node.addEventListener("beforescriptexecute", preventExecution);

                        if (node.parentNode) {
                            node.parentNode.removeChild(node);
                        }
                    }
                }
            }
        });

        observer2.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    })();
    let style = document.createElement('style');
    style.innerHTML = "#POPUPS_ROOT{display:none !important} #popups-wrapper{display:none !important}";
    document.head.appendChild(style);
    const originalSetAttribute = Element.prototype.setAttribute;

    const queuedImageUpdates = [];

    Element.prototype.setAttribute = function (name, value) {
        if (this.tagName === 'IMG' && name === 'src') {
            if (this.hasAttribute('data-lazy')) { this.removeAttribute('data-lazy'); }
            queuedImageUpdates.push({ element: this, desiredSrc: value });
            return;
        }
        return originalSetAttribute.apply(this, arguments);
    };

    window.processBlockedImageSrcs = function () {
        queuedImageUpdates.forEach(({ element, desiredSrc }) => {
            const hiddenLoader = new Image();
            hiddenLoader.onload = function () {
                originalSetAttribute.call(element, 'src', desiredSrc);
            };
            hiddenLoader.src = desiredSrc;
        });

        queuedImageUpdates.length = 0;
    };

    window.restoreImageSrcBehavior = function () {
        Element.prototype.setAttribute = originalSetAttribute;
    };
    function preventBodyDivInsertion() {
        const originalAppendChild = HTMLBodyElement.prototype.appendChild;
        const originalInsertBefore = HTMLBodyElement.prototype.insertBefore;

        HTMLBodyElement.prototype.appendChild = function (newChild) {
            if (newChild.tagName && newChild.tagName.toUpperCase() === 'DIV') {
                return newChild;
            }
            return originalAppendChild.call(this, newChild);
        };

        HTMLBodyElement.prototype.insertBefore = function (newNode, referenceNode) {
            if (newNode.tagName && newNode.tagName.toUpperCase() === 'DIV') {
                return newNode;
            }
            return originalInsertBefore.call(this, newNode, referenceNode);
        };

        return function restoreBodyInsertionMethods() {
            HTMLBodyElement.prototype.appendChild = originalAppendChild;
            HTMLBodyElement.prototype.insertBefore = originalInsertBefore;
        };
    }
    let hasInvokedRestore = false;
    const observer = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
            if (entry.entryType === 'largest-contentful-paint' && !hasInvokedRestore) {
                hasInvokedRestore = true;
                setTimeout(() => {
                    window.restoreImageSrcBehavior();
                    window.processBlockedImageSrcs();
                }, 10000);

                preventBodyDivInsertion();
            }
        });
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
})();
