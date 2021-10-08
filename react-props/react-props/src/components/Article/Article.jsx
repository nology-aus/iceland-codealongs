// Declaring our Article functional component
// This component catching 3 props `title, subtitle, content`, sent from the parent component (App)

const Article = ({ title, subtitle, content }) => {
    return (
        // We are using the values assigned to the props at the parent component level inside of our Article component
        <div>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <p>{content}</p>
        </div>
    );
};

// Defining default values for props, if not props passed at parent component level
Article.defaultProps = {
    title: "Default Title",
    subtitle: "Default Subtitle",
    content: "Default Content",
};

// Exporting Article component to make it accessible in index.js
export default Article;
