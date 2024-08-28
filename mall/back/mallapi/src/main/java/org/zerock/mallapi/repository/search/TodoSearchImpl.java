package org.zerock.mallapi.repository.search;

import com.querydsl.jpa.JPQLQuery;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.zerock.mallapi.domain.QTodo;
import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.PageRequestDTO;

import java.util.List;

@Log4j2
public class TodoSearchImpl extends QuerydslRepositorySupport implements TodoSearch {

    public TodoSearchImpl() {
        super(Todo.class);
    }

    @Override
    public Page<Todo> search1(PageRequestDTO pageRequestDTO) {

        log.info("search1................");

        //쿼리를 날리기 위한 객체
        QTodo todo = QTodo.todo;

        JPQLQuery<Todo> query = from(todo);

        //제목에 1인 글자가 들어가있는 쿼리문 찾아!
        query.where(todo.title.contains("1"));

        Pageable pageable = PageRequest.of(pageRequestDTO.getPage() -1,
                                                        pageRequestDTO.getSize(),
                                                        Sort.by("tno").descending());

        this.getQuerydsl().applyPagination(pageable, query);

        //쿼리를 실행하는 메서드. 목록 데이터 를 가져옴
        List<Todo> list = query.fetch();

        //fetchCount() => Long타입
        long total = query.fetchCount();

        return new PageImpl<>(list, pageable, total);

    }
}
