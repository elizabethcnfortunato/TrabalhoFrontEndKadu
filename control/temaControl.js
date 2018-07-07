var app = angular.module('temaModule',[]);

app.controller('temaControl',function($scope){
	
	$scope.temas = [{'codigo':'1','nome':'alimentos, nutricao e qualidade de vida'},
	{'codigo':'2','nome':'sistemas computacionais'},
	{'codigo':'3','nome':'novas tecnologias'},
	{'codigo':'4','nome':'fisica aplicada'},
	{'codigo':'5','nome':'matematica aplicada'},
	{'codigo':'6','nome':'literaturas e suas nuances'},
	{'codigo':'7','nome':'pedagogia infantil'},
	{'codigo':'8','nome':'pedagogia infantujenil'},
	{'codigo':'9','nome':'mecânica aplicada'},
	{'codigo':'10','nome':'estrutura e construção civil'},
	{'codigo':'11','nome':'sistemas computacionais distribuidos'}]
	
	$scope.pesquisar = function(){
		 
	}
	
	$scope.novo = function(){
		$scope.tema = {};
		$scope.mensagens = [];
	}
	
	$scope.montaMensagemErro = function(listaErro) {
		$scope.mensagens = [];
		$scope.mensagens.push('Falha de validação retornada do servidor');
		angular.forEach(listaErro, function(value, key){
			 $scope.mensagens.push(value.message);
		});
	}

    $scope.salvar = function() {    	
    	$scope.temas.push($scope.tema);
		$scope.novo();
		$scope.mensagens.push('Tema salvo com sucesso');
	}
	
	$scope.excluir = function() {
		if ($scope.tema.codigo == '') {
			alert('Selecione um pessoa');
		} else {
			$scope.temas.splice($scope.temas.indexOf($scope.tema),1);
			$scope.pesquisar();
				$scope.novo();
				$scope.mensagens.push('Tema excluído com sucesso');
		}
	}
	
	$scope.seleciona = function(temaTabela) {
		$scope.tema = temaTabela;
	}
	
	$scope.pesquisar();
	$scope.novo();
});