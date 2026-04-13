export async function getUser() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
    
    if (typeof window === "undefined") {
        console.log(typeof window)
        return null
    };

    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}