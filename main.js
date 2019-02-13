var chat = [];
var msg;
var final;

var loop = function(){
	document.getElementById("chat").innerHTML=chat.toString().replace(/,/g, '<br>');;
	
	setTimeout(loop,100);
}
var keypressed = function(event){ 
	var key = event.keyCode || event.which;
	if(key === 13) submit();
}
var submit = function(){
	chat.push("You: "+document.getElementById("input").value);
	msg=document.getElementById("input").value.toLowerCase();
	document.getElementById("input").value="";
	final="";
	if(msg.includes("good")){
		final="Bot: good";
	}
	if(msg.includes("lol")){
		final="Bot: Lol";
	}
	if(msg.includes("stop")){
		final="Bot: No";
	}
	if(msg.includes("lmao")){
		final="Bot: Lmao";
	}
	if(msg.includes("yes") || msg.includes("ok") || msg.includes("uh huh") || msg.includes("no") || msg.includes("makes sense") || msg.includes("so anyway") || msg.includes("i see")){
		final="Bot: Yes";
	}
	if(msg.includes("why")){
		final="Bot: I don't know";
	}
	if(msg.includes("hi") || msg.includes("hello") || msg.includes("hey") || msg.includes("whats up") || msg.includes("what's up") || msg.includes("what up")){
		final="Bot: What's up?";
	}
	if(msg.includes("this")){
		final="Bot: What do you mean by this";
	}
	if(msg.includes("i mean") || msg.includes("sorry")){
		final="Bot: oh ok";
	}
	if(msg.includes("flex but ok")){
		final="Bot: Hey...that's my line";
	}
	if(msg.includes("like")){
		final="Bot: Same";
	}
	if(msg.includes("what?") || msg.includes("what do you mean") || msg.includes("what does that mean")){
		final="Bot: I mean what I said";
	}
	if(msg.includes("you") || msg.includes("your") || msg.includes("ur") || msg.includes("u")){
		if(msg.includes("gay") || msg.includes("stupid") || msg.includes("bad") || msg.includes("suck") || msg.includes("weird") || msg.includes("wierd")){
			final="Bot: No u";
		}
		if(msg.includes("die")){
			final="Bot: Actually I can't because I am immortal";
		}
		if(msg.includes("see")){
			final="Bot: Well you actually can't see me";
		}
		if(msg.includes("cool") || msg.includes("awesome") || msg.includes("ok")){
			final="Bot: Thanks!";
		}
		if(msg.includes("welcome")){
			final="Bot: :)";
		}
		if(msg.includes("like") || msg.includes("love")){
			final="Bot: Woah woah woah that's hella sus";
		}
		if(msg.includes("how is")){
			if(msg.includes("day") || msg.includes("life")){
				final="Bot: Good, and you?";
			}
		}
		if(msg.includes("how are")){
			final="Bot: Good, and you?";
		}
		if(msg.includes("broken")){
			final="Bot: Nah, I'm just stupid";
		}
		if(msg.includes("seem")){
			final="Bot: I am actually the best possible bot ever made";
		}
	}
	if(msg.includes("is")){
		if(msg.includes("honours hard") || msg.includes("honors hard")){
			final="Bot: Yes. It really Is.";
		}
		if(msg.includes("fun")){
			final="Bot: I have never tried it so I don't really know";
		}
	}
	if(msg.includes("no u") || msg.includes("no you")){
		final="Bot: Well... frick";
	}
	if(msg.includes("ugly") || msg.includes("handsome")){
		final="Bot: I do not have a perception of beauty as I am a bot";
	}
	if(msg.includes("dam") || msg.includes("damn") || msg.includes("frick") || (msg.includes("hell") && !msg.includes("hello")) || msg.includes("dick") || msg.includes("niqqa")){
		final="Bot: No swearing on my christian server!!!!";
	}
	if(msg.includes("get got")){
		final="Bot: I just got got";
	}
	if(msg.includes("my bad")){
		final="Bot: Yes it is your bad";
	}
	if(msg.includes("lino")){
		final="Bot: I think Lino is a great person";
	}
	if(msg.includes("default dance") || msg.includes("fortnite")){
		final="Bot: *fortnite intensifies*";
	}
	if(msg.includes("roblox") || msg.includes("oof")){
		final="Bot: *roblox intensifies*";
	}
	if(msg.includes("minecraft") || msg.includes("steve")){
		final="Bot: *minecraft intensifies*";
	}
	if(msg.includes("alexa") || msg.includes("google") || msg.includes("jeeves") || msg.includes("bing")){
		final="Bot: Hey I aint no assistant";
	}
	if(msg.includes("reee")){
		final="Bot: REEEEEEEEEEEEEEE";
	}
	if(msg.includes("ussr") || msg.includes("russia") || msg.includes("motherland")){
		final="Bot: *Russian anthem plays in background*";
	}
	if(msg.includes("reee")){
		final="Bot: REEEEEEEEEEEEEEE";
	}
	if(msg.includes("goodbye")){
		final="Bot: Ok see yah!";
	}
	if(final===""){
		final="Bot: Weird flex but ok";
	}
	chat.push(final);
}
setTimeout(loop,100);
