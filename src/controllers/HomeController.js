
function getPage (req,res) {
    return res.render ('index.ejs')
}

module.exports = {
    getPage
}