module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            title: String,
            summary: String,
            body: String,
            author: String,
            cover: String
        },
        { timestamps: true }
    );
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Article = mongoose.model("article", schema);
    return Article;
};