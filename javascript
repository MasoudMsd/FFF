
    body: JSON.stringify({
      address: userWalletAddress,
      players: selectedPlayers.map(p => p.username),
      buildScores: selectedPlayers.map(p => p.buildScore)
    })
  });
  const result = await response.json();
  console.log(result.txHash); // هش تراکنش
}
