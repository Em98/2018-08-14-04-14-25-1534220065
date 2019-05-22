module.exports = function main(input) {
    var map = new Map([
        ["0", ["._.", "|.|", "|_|"]],
        ["1", ["...", "..|", "..|"]],
        ["2", ["._.", "._|", "|_."]],
        ["3", ["._.", "._|", "._|"]],
        ["4", ["...", "|_|", "..|"]],
        ["5", ["._.", "|_.", "._|"]],
        ["6", ["._.", "|_.", "|_|"]],
        ["7", ["._.", "..|", "..|"]],
        ["8", ["._.", "|_|", "|_|"]],
        ["9", ["._.", "|_|", "..|"]]
    ]);
    if(input.length === 0)
        return "input size error.";
    var ans1 = [];
    var ans2 = [];
    var ans3 = [];
    for (let i=0; i<input.length; i++){
        var arr = map.get(input[i]);
        if(!arr)
            return "input format error.";
        ans1.push(arr[0]);
        ans2.push(arr[1]);
        ans3.push(arr[2]);
    }
    var ans = [ans1.join(" "), ans2.join(" "), ans3.join(" ")];
    return  ans.join("\n") + "\n";
};