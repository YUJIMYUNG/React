package org.zerock.mallapi.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.PageRequestDTO;
import org.zerock.mallapi.dto.PageResponseDTO;
import org.zerock.mallapi.dto.TodoDTO;
import org.zerock.mallapi.repository.TodoRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService{

    //의존성 주입
    private final TodoRepository todoRepository;

    @Override
    public TodoDTO get(Long tno) {

        //조회
        Optional<Todo> result = todoRepository.findById(tno);

        //문제가 생길 때 예외처리
        Todo todo = result.orElseThrow();

        return entityToDTO(todo);
    }

    @Override
    public Long register(TodoDTO dto) {

        Todo todo = dtoToEntity(dto);

        Todo result = todoRepository.save(todo);

        return result.getTno();
    }

    @Override
    public void modify(TodoDTO dto) {

        //데이터베이스를 가져오고
        Optional<Todo> result = todoRepository.findById(tno);

        Todo todo = result.orElseThrow();

        //내용 바꾼 뒤에
        todo.changeTitle(dto.getTitle());
        todo.changeContent(dto.getContent());
        todo.changeComplete(dto.isComplete());
        todo.changeDueDate(dto.getDueDate());

        //세이브
        todoRepository.save(todo);
    }

    @Override
    public void remove(Long tno) {

        todoRepository.deleteById(tno);
    }

    @Override
    public PageResponseDTO<TodoDTO> getlist(PageRequestDTO pageRequestDTO) {

        //JPA 관련 처리
        Page<Todo> result = todoRepository.search1(pageRequestDTO);

        //가져온건 Todo List -> TodoDTO list가 되어야 함
        List<TodoDTO> dtoList = result
                .get()
                .map(todo -> entityToDTO(todo)).collect(Collectors.toList());

        PageResponseDTO<TodoDTO> responseDTO =
                PageResponseDTO.<TodoDTO>withAll()
                        .dtoList(dtoList)
                        .pageRequestDTO(pageRequestDTO)
                        .total(result.getTotalElements())
                        .build();

        return responseDTO;
    }
}
