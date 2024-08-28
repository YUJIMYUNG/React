package org.zerock.mallapi.service;

import jakarta.transaction.Transactional;
import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.PageRequestDTO;
import org.zerock.mallapi.dto.PageResponseDTO;
import org.zerock.mallapi.dto.TodoDTO;

@Transactional
public interface TodoService {

    //조회
    TodoDTO get(Long tno);

    //등록
    Long register(TodoDTO dto);

    //수정
    void modify(TodoDTO dto);

    //삭제
    void remove(Long tno);

    //공통적으로 처리하는 페이지
    PageResponseDTO<TodoDTO> getlist(PageRequestDTO pageRequestDTO);


    default TodoDTO entityToDTO(Todo todo){

       return TodoDTO.builder()
                        .tno(todo.getTno())
                        .title(todo.getTitle())
                        .content(todo.getContent())
                        .complete(todo.isComplete())
                        .dueDate(todo.getDueDate())
                        .build();
    }

    default Todo dtoToEntity(TodoDTO todoDTO){

        return Todo.builder()
                .tno(todoDTO.getTno())
                .title(todoDTO.getTitle())
                .content(todoDTO.getContent())
                .complete(todoDTO.isComplete())
                .dueDate(todoDTO.getDueDate())
                .build();
    }
}
