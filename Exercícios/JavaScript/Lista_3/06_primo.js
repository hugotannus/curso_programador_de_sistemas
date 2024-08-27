function primo(N) {
	if(N <= 1) return false;
	if(N == 2) return true;

	for(let p=2; p<N; p++) {
		if(N % p === 0) return false;
	}

	return true;
}

console.log(primo(7));
console.log(primo(10));
console.log(primo(13));
console.log(primo(0));
console.log(primo(1));
console.log(primo(2));