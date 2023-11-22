// Extract all the images from an entry and push them in an array
export const extractImagesFromContent = (data) => {
    let imageSources = [];

    // Recursive function to traverse through the children
    function traverse(children) {
        if (!children) {
            return;
        }

        children.forEach(child => {
            if (child.type === 'element' && child.tag === 'img' && child.props && child.props.src) {
                // If it's an image, push the src to the array
                imageSources.push(child.props.src);
            }

            // If the element has children, recurse into them
            if (child.children) {
                traverse(child.children);
            }
        });
    }

    // Start the traversal from the root
    traverse(data.children);

    return imageSources;
}

// Extract all the text from an entry and merge it together
export const extractTextFromContent = (data) => {
    if (typeof data === 'string') {
        return data;
    }

    let textContent = '';
    if (data.children && Array.isArray(data.children)) {
        data.children.forEach(child => {
            textContent += extractTextFromContent(child);
        });
    } else if (data.value && typeof data.value === 'string') {
        textContent += data.value;
    }

    return textContent;
}