```javascript
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    background: #111827;
                    color: #9ca3af;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem;
                }
                
                .footer-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2rem;
                    justify-content: space-between;
                }
                
                .footer-section h3 {
                    color: #f9fafb;
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1rem;