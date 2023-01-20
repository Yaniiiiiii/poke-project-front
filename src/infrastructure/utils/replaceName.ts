export function replaceName(name: any) {
    switch (name) {
        case name.includes('♀'):
            return name.replace('♀', '-f');
        case name.includes('♂'):
            name.replace('♂', '-n');
            break;
        case name.includes('. '):
            name.replace('. ', '-');
            break;
        case name === "farfetch'd":
            name.delete();
            break;
        default:
            console.log(name);
    }
}
