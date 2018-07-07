var app = angular.module('cursoModule',[]);

app.controller('cursoControl',function($scope){
	
	$scope.cursos = [{'codigo':'1','nome':'Ciencias da Computacao'},
	{'codigo':'2','nome':'Logistica'},
	{'codigo':'3','nome':'Fisica'},
	{'codigo':'4','nome':'Matematica'},
	{'codigo':'5','nome':'Quimica'},
	{'codigo':'6','nome':'Ciencias biologicas'},
	{'codigo':'7','nome':'Letras'},
	{'codigo':'8','nome':'Pedagogia'},
	{'codigo':'9','nome':'Historia'},
	{'codigo':'10','nome':'Geografia'}]
	
	$scope.pesquisar = function(){
		 
	}
	
	$scope.novo = function(){
		$scope.curso = {};
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
    	$scope.cursos.push($scope.curso);
		$scope.novo();
		$scope.mensagens.push('Curso salvo com sucesso');
	}
	
	$scope.excluir = function() {
		if ($scope.curso.codigo == '') {
			alert('Selecione um curso');
		} else {
			$scope.curso.splice($scope.curso.indexOf($scope.curso),1);
			$scope.pesquisar();
				$scope.novo();
				$scope.mensagens.push('Curso excluído com sucesso');
		}
	}
	
	$scope.seleciona = function(cursoTabela) {
		$scope.curso = cursoTabela;
	}
	
	$scope.pesquisar();
	$scope.novo();
});