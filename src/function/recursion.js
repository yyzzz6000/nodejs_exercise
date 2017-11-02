function getDependencies(tree, result) {
    result = result || [];
    var dependencies = tree && tree.dependencies || [];
    Object.keys(dependencies).forEach(function(name){
        var dep = name + '@' + dependencies[name].version;
        if (result.indexOf(dep) === -1) {
            result.push(dep);
        }
        getDependencies(dependencies[name], result);
    });
    
    return result.sort();
}


module.exports = getDependencies