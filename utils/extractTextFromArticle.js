export const extractTextFromContent = (content) => {
    if (typeof content === 'string') {
        return content;
    }

    let textContent = '';
    if (content.children && Array.isArray(content.children)) {
        content.children.forEach(child => {
            textContent += extractTextFromContent(child);
        });
    } else if (content.value && typeof content.value === 'string') {
        textContent += content.value;
    }

    return textContent;
}

export default extractTextFromContent;