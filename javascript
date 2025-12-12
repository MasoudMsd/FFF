
  const response = await fetch('/api/mint-team', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      address: userWalletAddress,
      players: selectedPlayers.map(p => p.username),
      buildScores: selectedPlayers.map(p => p.buildScore)
    })
  });
  const result = await response.json();
  console.log(result.txHash); // هش تراکنش
}
